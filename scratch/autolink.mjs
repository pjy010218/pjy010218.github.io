import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dirs = ['_wiki', '_papers'];

function getFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = entries.flatMap((entry) => {
        const res = path.resolve(dir, entry.name);
        return entry.isDirectory() ? getFiles(res) : res;
    });
    return files;
}

const allMdFiles = dirs.flatMap(dir => getFiles(dir)).filter(f => f.endsWith('.md'));

const targets = allMdFiles.map(f => {
    const content = fs.readFileSync(f, 'utf8');
    const { data } = matter(content);
    const slug = path.basename(f, '.md');
    const title = data.title || slug;
    return { slug, title, path: f };
});

// Create search patterns
const searchTargets = [];
for (const t of targets) {
    // Add title
    searchTargets.push({ text: t.title, slug: t.slug });
    // Add slug
    if (t.title.toLowerCase() !== t.slug.toLowerCase()) {
        searchTargets.push({ text: t.slug, slug: t.slug });
    }
    // Add slug with spaces/hyphens replaced
    const slugClean = t.slug.replace(/[_-]/g, ' ');
    if (slugClean.toLowerCase() !== t.title.toLowerCase() && slugClean.toLowerCase() !== t.slug.toLowerCase()) {
        searchTargets.push({ text: slugClean, slug: t.slug });
    }
}

// Sort by length descending to prioritize longer matches
searchTargets.sort((a, b) => b.text.length - a.text.length);

for (const filePath of allMdFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    const currentSlug = path.basename(filePath, '.md');

    for (const target of searchTargets) {
        if (target.slug === currentSlug) continue;
        if (target.text.length < 3) continue;

        // Escape text for regex
        const escapedText = target.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Case-insensitive regex
        const regex = new RegExp(`(?<!\\[\\[|\\/wiki\\/|\\w)${escapedText}(?!\\w|\\]\\])`, 'gi');

        const parts = content.split(/(```[\s\S]*?```|`[^`]*`|\[\[.*?\]\]|\[.*?\]\(.*?\))/g);
        let partChanged = false;
        const newParts = parts.map(part => {
            if (!part) return part;
            // Skip code blocks and existing links
            if (part.startsWith('```') || part.startsWith('`') || (part.startsWith('[') && part.includes(']'))) {
                return part;
            }
            // Use a function to preserve case of the matched text if possible, but we'll just link it
            const replaced = part.replace(regex, (match) => `[[${target.slug}|${match}]]`);
            if (replaced !== part) partChanged = true;
            return replaced;
        });

        if (partChanged) {
            content = newParts.join('');
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${path.basename(filePath)}`);
    }
}

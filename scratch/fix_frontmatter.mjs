import fs from 'fs';
import path from 'path';

const dirs = ['_wiki', '_papers'];

function getFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const res = path.resolve(dir, entry.name);
        return entry.isDirectory() ? getFiles(res) : res;
    });
}

const allMdFiles = dirs.flatMap(dir => getFiles(dir)).filter(f => f.endsWith('.md'));

for (const f of allMdFiles) {
    const content = fs.readFileSync(f, 'utf8');
    if (content.startsWith('---')) {
        const parts = content.split('---');
        if (parts.length >= 3) {
            let frontmatter = parts[1];
            if (frontmatter.includes('[[')) {
                // Regex to find [[slug|alias]] and replace with alias, or [[slug]] with slug
                const fixed = frontmatter.replace(/\[\[.*?\|(.*?)\]\]/g, '$1').replace(/\[\[(.*?)\]\]/g, '$1');
                if (fixed !== frontmatter) {
                    parts[1] = fixed;
                    fs.writeFileSync(f, parts.join('---'));
                    console.log(`Fixed frontmatter: ${path.basename(f)}`);
                }
            }
        }
    }
}

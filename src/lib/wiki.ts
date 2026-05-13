import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WIKI_DIR = path.join(process.cwd(), '_wiki');
const PAPERS_DIR = path.join(process.cwd(), '_papers');

export interface WikiPage {
  slug: string;
  type: string;
  frontmatter: Record<string, any>;
  content: string;
  fullPath: string;
}

export function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  let mdFiles: string[] = [];
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      mdFiles = mdFiles.concat(getMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      mdFiles.push(fullPath);
    }
  }
  return mdFiles;
}

export function getAllPages(): WikiPage[] {
  const allFiles = [
    ...getMarkdownFiles(WIKI_DIR).map(f => ({ path: f, type: 'wiki' })),
    ...getMarkdownFiles(PAPERS_DIR).map(f => ({ path: f, type: 'papers' }))
  ];

  return allFiles.map(fileObj => {
    const fileContent = fs.readFileSync(fileObj.path, 'utf8');
    const { data, content } = matter(fileContent);
    const filename = path.basename(fileObj.path, '.md');
    
    return {
      slug: filename,
      type: fileObj.type,
      frontmatter: data,
      content,
      fullPath: fileObj.path,
    };
  });
}

export function getPageBySlug(slug: string): WikiPage | undefined {
  const pages = getAllPages();
  // Decode URI component and strip trailing slashes
  const cleanSlug = decodeURIComponent(slug).replace(/\/+$/, "");
  return pages.find(p => p.slug === cleanSlug || p.slug === slug.replace(/\/+$/, ""));
}

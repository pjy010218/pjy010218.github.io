import { getAllPages } from '@/lib/wiki';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkWikiLink from 'remark-wiki-link';
import rehypeSlug from 'rehype-slug';
import React from 'react';

export default function WikiIndex() {
  const allPages = getAllPages();
  const wikis = allPages
    .filter(p => p.type === 'wiki')
    .sort((a, b) => {
       const titleA = a.frontmatter.title || a.slug;
       const titleB = b.frontmatter.title || b.slug;
       return titleB.localeCompare(titleA); // Descending (newest first)
    });

  return (
    <div className="research-megalith">
      {wikis.map((log) => {
        const title = log.frontmatter.title || log.slug;
        const titleLen = title.length;
        
        let fsize = "clamp(4.5rem, 9vw, 8rem)";
        let lh = "0.9";
        if (titleLen >= 15 && titleLen < 30) {
           fsize = "clamp(3.5rem, 7vw, 6rem)";
           lh = "1";
        } else if (titleLen >= 30 && titleLen < 55) {
           fsize = "clamp(2.5rem, 5vw, 4rem)";
           lh = "1.05";
        } else if (titleLen >= 55) {
           fsize = "clamp(1.8rem, 3.5vw, 3rem)";
           lh = "1.15";
        }

        const tags = log.frontmatter.tags || [];
        const firstTag = tags.length > 0 ? tags[0].toUpperCase() : 'WIKI';
        let dateVal = log.frontmatter.updated || log.frontmatter.date || '';
        const dateStr = dateVal instanceof Date ? dateVal.toISOString().split('T')[0] : String(dateVal);

        return (
          <details key={log.slug} className="mega-log group">
            <summary className="mega-title" style={{ fontSize: fsize, lineHeight: lh }}>
               <span className="mega-text uppercase">{title}</span>
               <span className="mega-meta">[{firstTag}] {dateStr}</span>
            </summary>
            <div className="mega-content prose prose-lg max-w-none">
              <MDXRemote
                source={log.content}
                options={{
                  mdxOptions: {
                    format: 'md',
                    remarkPlugins: [
                      remarkGfm,
                      [remarkWikiLink, {
                        pageResolver: (name: string) => [name],
                        hrefTemplate: (permalink: string) => `/wiki/${permalink}`,
                        aliasDivider: '|'
                      }]
                    ],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </details>
        );
      })}

      {wikis.length === 0 && (
        <h2 style={{ fontSize: '3rem', textAlign: 'right', marginTop: '100px', color: '#aaa' }}>
          NO WIKI ENTRIES YET.
        </h2>
      )}
    </div>
  );
}

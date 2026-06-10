import { getAllPages } from '@/lib/wiki';
import Link from 'next/link';
import React from 'react';

export default function WikiIndex() {
  const allPages = getAllPages();
  const wikis = allPages
    .filter(p => p.type === 'wiki')
    .sort((a, b) => {
       const titleA = a.frontmatter.title || a.slug;
       const titleB = b.frontmatter.title || b.slug;
       return titleA.localeCompare(titleB); // Ascending (A-Z) for Wiki index
    });

  // Grouping by first tag or 'General'
  const categories: Record<string, typeof wikis> = {};
  wikis.forEach(page => {
    const tags = page.frontmatter.tags || [];
    const cat = tags.length > 0 ? tags[0] : 'General';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(page);
  });

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif text-black border-b border-[#a2a9b1] pb-2 mb-6 mt-0">
        Wiki Contents
      </h1>
      
      <div className="text-[15px] text-[#202122] mb-8">
        <p>This is the central index for all wiki entries, concepts, and ongoing project documentation.</p>
      </div>

      <div className="space-y-6">
        {Object.keys(categories).sort().map(cat => (
          <section key={cat} className="bg-[#f8f9fa] border border-[#a2a9b1] p-4">
            <h2 className="text-lg font-serif text-[#000000] border-b border-[#c8ccd1] pb-1 mb-3 mt-0 flex items-center">
              <span className="text-[#54595d] text-[12px] mr-2">▶</span> {cat}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[14px]">
              {categories[cat].map((page) => {
                const title = page.frontmatter.title || page.slug;
                return (
                  <li key={page.slug}>
                    <Link href={`/wiki/${page.slug}`} className="text-[#0645ad] hover:underline font-medium">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        {wikis.length === 0 && (
          <p className="text-[#54595d] italic text-sm">No wiki entries available yet.</p>
        )}
      </div>
    </div>
  );
}

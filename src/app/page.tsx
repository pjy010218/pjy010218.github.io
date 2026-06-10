import { getAllPages } from '@/lib/wiki';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const allPages = getAllPages();
  const papers = allPages
    .filter(p => p.type === 'papers' || !p.type)
    .sort((a, b) => {
       const titleA = a.frontmatter.title || a.slug;
       const titleB = b.frontmatter.title || b.slug;
       return titleB.localeCompare(titleA); // Descending (newest first)
    });

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-6 mb-8 text-center rounded-sm">
        <h1 className="text-3xl font-serif text-black mb-2 border-none mt-0">Welcome to PJY Wiki</h1>
        <p className="text-[#202122] text-[15px]">
          The research hub and knowledge base of <strong>Junyeong Park</strong>.<br/>
          Focusing on autonomous LLM agents and contextual data loss prevention.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-2xl font-serif text-black border-b border-[#a2a9b1] pb-1 mb-4 flex justify-between items-end mt-0">
            <span>Recent Research Logs</span>
            <span className="text-sm font-sans text-[#54595d] font-normal">({papers.length} articles)</span>
          </h2>
          
          <table className="wikitable w-full text-[14px]">
            <thead>
              <tr>
                <th className="w-[15%] text-left">Date</th>
                <th className="w-[15%] text-center">Tag</th>
                <th className="w-[70%] text-left">Title</th>
              </tr>
            </thead>
            <tbody>
              {papers.map((log) => {
                const title = log.frontmatter.title || log.slug;
                const tags = log.frontmatter.tags || [];
                const firstTag = tags.length > 0 ? tags[0].toUpperCase() : 'LOG';
                
                let dateVal = log.frontmatter.updated || log.frontmatter.date || '';
                const dateStr = dateVal instanceof Date ? dateVal.toISOString().split('T')[0] : String(dateVal);

                return (
                  <tr key={log.slug} className="hover:bg-[#f8f9fa]">
                    <td className="whitespace-nowrap font-mono text-[13px]">{dateStr}</td>
                    <td className="text-center text-[#54595d] text-[12px]">{firstTag}</td>
                    <td>
                      <Link href={`/wiki/${log.slug}`} className="text-[#0645ad] hover:underline font-medium">
                        {title}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {papers.length === 0 && (
            <p className="text-[#54595d] italic">No research logs available yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}

import { getAllPages } from '@/lib/wiki';
import Link from 'next/link';

export default function WikiIndex() {
  const allPages = getAllPages();
  const wikis = allPages.filter(p => p.type === 'wiki');
  const papers = allPages.filter(p => p.type === 'papers');

  return (
    <div className="flex w-full min-h-screen bg-white text-[#202122] font-sans wikipedia-aesthetic">
      <aside className="w-[11rem] lg:w-56 flex-shrink-0 bg-[#f6f6f6] border-r border-[#a7d7f9] p-4 hidden md:block">
        <div className="mb-8 mt-4 pl-2">
          <Link href="/" className="text-2xl font-serif text-black tracking-tight" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
            <span className="block text-3xl">W</span>iki
          </Link>
        </div>
        
        <nav className="space-y-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[#0645ad] hover:underline">Main page</Link></li>
              <li><Link href="/wiki" className="text-[#0645ad] hover:underline font-bold text-black">Contents</Link></li>
            </ul>
          </div>
        </nav>
      </aside>

      <main className="flex-grow p-6 lg:p-10 max-w-[55rem]">
        <h1 className="text-4xl font-serif text-black font-normal tracking-tight mb-2 border-b border-[#a2a9b1] pb-1" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
          Wiki Contents
        </h1>
        <div className="text-sm text-[#54595d] mb-6">From Wikipedia, the free encyclopedia</div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-black font-normal tracking-tight mb-4 border-b border-[#a2a9b1] pb-1" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
              Wiki Pages
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {wikis.map(page => (
                <li key={page.slug}>
                  <Link href={`/wiki/${page.slug}`} className="text-[#0645ad] hover:underline text-[15px]">
                    {page.frontmatter.title || page.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black font-normal tracking-tight mb-4 border-b border-[#a2a9b1] pb-1" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
              Research Papers
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {papers.map(page => (
                <li key={page.slug}>
                  <Link href={`/wiki/${page.slug}`} className="text-[#0645ad] hover:underline text-[15px]">
                    {page.frontmatter.title || page.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

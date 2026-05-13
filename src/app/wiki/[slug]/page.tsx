import { getPageBySlug, getAllPages } from '@/lib/wiki';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkWikiLink from 'remark-wiki-link';
import rehypeSlug from 'rehype-slug';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function WikiPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  const allPages = getAllPages();
  const pagePermalinks = allPages.map(p => p.slug);

  return (
    <div className="flex w-full min-h-screen bg-white text-[#202122] font-sans wikipedia-aesthetic">
      {/* Left Sidebar (Wikipedia style) */}
      <aside className="w-[11rem] lg:w-56 flex-shrink-0 bg-[#f6f6f6] border-r border-[#a7d7f9] p-4 hidden md:block">
        <div className="mb-8 mt-4 pl-2">
          <Link href="/" className="text-2xl font-serif text-black tracking-tight" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
            <span className="block text-3xl">W</span>iki
          </Link>
        </div>
        
        <nav className="space-y-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#0645ad] hover:underline">
                  Main page
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="text-[#0645ad] hover:underline">
                  Contents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#0645ad] hover:underline">
                  Current events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#0645ad] hover:underline">
                  Random article
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-[#54595d] border-b border-[#c8ccd1] pb-1 mb-2">Research Papers</h3>
            <ul className="space-y-2 text-sm">
              {allPages.filter(p => p.type === 'papers').map(p => (
                <li key={p.slug} className="line-clamp-2">
                  <Link href={`/wiki/${p.slug}`} className="text-[#0645ad] hover:underline" title={p.frontmatter.title || p.slug}>
                    {p.frontmatter.title || p.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-10 max-w-[55rem]">
        {/* Top bar (Article, Talk, Read, Edit) */}
        <div className="flex justify-between items-end border-b border-[#a2a9b1] mb-2 pb-1">
          <ul className="flex space-x-1 text-sm font-medium">
            <li className="bg-white border border-b-0 border-[#a2a9b1] px-3 py-2 rounded-t-sm relative top-[1px] z-10 text-black">
              Article
            </li>
            <li className="px-3 py-2 text-[#0645ad] hover:underline cursor-pointer">
              Talk
            </li>
          </ul>
          <ul className="flex space-x-1 text-sm font-medium">
            <li className="bg-white border border-b-0 border-[#a2a9b1] px-3 py-2 rounded-t-sm relative top-[1px] z-10 text-black">
              Read
            </li>
            <li className="px-3 py-2 text-[#0645ad] hover:underline cursor-pointer">
              Edit
            </li>
            <li className="px-3 py-2 text-[#0645ad] hover:underline cursor-pointer">
              View history
            </li>
          </ul>
        </div>
        
        <h1 className="text-4xl font-serif text-black font-normal tracking-tight mb-2" style={{ fontFamily: "'Linux Libertine', 'Georgia', 'Times', serif" }}>
          {page.frontmatter.title || page.slug}
        </h1>
        
        <div className="text-sm text-[#54595d] mb-6">
          From Wikipedia, the free encyclopedia
        </div>
        
        <div className="prose prose-blue max-w-none 
          prose-headings:font-serif prose-headings:font-normal prose-headings:border-b prose-headings:border-[#a2a9b1] prose-headings:pb-1 prose-headings:mb-4 prose-headings:mt-8
          prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-[#0645ad] prose-a:no-underline hover:prose-a:underline prose-a:bg-transparent
          prose-img:border prose-img:border-[#c8ccd1] prose-img:p-[2px] prose-img:bg-white
          prose-p:leading-[1.6] prose-p:text-[15px] prose-p:text-[#202122] prose-p:mb-4
          prose-li:text-[15px] prose-li:text-[#202122] prose-li:mb-1
          prose-table:border-collapse prose-table:border prose-table:border-[#a2a9b1] prose-table:bg-[#f8f9fa]
          prose-th:border prose-th:border-[#a2a9b1] prose-th:p-2 prose-th:bg-[#eaecf0]
          prose-td:border prose-td:border-[#a2a9b1] prose-td:p-2">
          <MDXRemote
            source={page.content}
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
      </main>
      
      {/* Right Sidebar */}
      <aside className="w-64 flex-shrink-0 p-4 hidden xl:block text-sm">
        {/* We can add a Table of Contents here later */}
      </aside>
    </div>
  );
}

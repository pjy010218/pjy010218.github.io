import { getAllPages } from '@/lib/wiki';
import HomeAccordion from '@/components/HomeAccordion';
import { Github, Linkedin, Mail, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const allPages = getAllPages();
  
  // Group pages by "related" metadata
  const categoriesMap: Record<string, any[]> = {};
  
  allPages.forEach(page => {
    const related = page.frontmatter.related || ["Other"];
    const relatedArr = Array.isArray(related) ? related : [related];
    
    relatedArr.forEach((cat: string) => {
      if (!categoriesMap[cat]) categoriesMap[cat] = [];
      categoriesMap[cat].push({
        slug: page.slug,
        title: page.frontmatter.title || page.slug,
        date: page.frontmatter.updated || page.frontmatter.date || ''
      });
    });
  });

  const categories = Object.keys(categoriesMap).map(name => ({
    name,
    pages: categoriesMap[name].sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    })
  }));

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Side: Intro & Info */}
        <aside className="lg:col-span-4 flex flex-col justify-between h-auto lg:h-[calc(100vh-10rem)] lg:sticky lg:top-20">
          <div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <User size={32} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Junyeong Park
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                Researching autonomous LLM agents and contextual data loss prevention (CLEAR). 
                Information Security student at Sejong University.
              </p>
            </div>

            <nav className="space-y-4 mb-12">
              <Link href="/wiki" className="flex items-center space-x-3 text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium">
                <BookOpen size={20} />
                <span>Knowledge Base</span>
              </Link>
            </nav>
          </div>

          {/* Intro Block (Left Bottom) */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-900 flex items-center space-x-2">
              <span>Connect</span>
            </h3>
            <div className="flex flex-col space-y-4">
              <a href="https://github.com/pjy010218" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors duration-200">
                <div className="p-2 bg-gray-50 rounded-lg"><Github size={18} /></div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/pjy010218" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Linkedin size={18} /></div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="mailto:pjy010218@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors duration-200">
                <div className="p-2 bg-red-50 rounded-lg text-red-600"><Mail size={18} /></div>
                <span className="text-sm font-medium">pjy010218@gmail.com</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Accordion Content */}
        <main className="lg:col-span-8">
          <header className="mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Research & Logs</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 italic">Building a Contextual Security Matrix for Agentic AI.</h3>
          </header>

          <HomeAccordion categories={categories} />
          
          <footer className="mt-20 pt-8 border-t border-gray-100 text-gray-400 text-sm flex justify-between items-center">
            <p>© 2026 Junyeong Park</p>
            <div className="flex space-x-6">
              <Link href="/wiki" className="hover:text-gray-900 transition-colors">Wiki</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">About</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

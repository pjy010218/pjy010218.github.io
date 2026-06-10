import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Junyeong Park | Wiki",
  description: "Research logs and wiki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans text-[14px] leading-[1.6] bg-white text-[#202122]">
        
        {/* Left Sidebar (Wikipedia Style) */}
        <aside className="w-[11rem] lg:w-[13.5rem] flex-shrink-0 bg-[#f6f6f6] border-r border-[#a7d7f9] p-5 hidden md:block min-h-screen">
          <div className="mb-6 pl-1">
            <Link href="/" className="font-serif text-black tracking-tight text-xl flex items-center">
              <span className="text-3xl mr-1 leading-none">P</span>JY Wiki
            </Link>
          </div>
          
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-[#54595d] border-b border-[#c8ccd1] pb-1 mb-2">Navigation</h3>
              <ul className="space-y-1.5 text-[13px]">
                <li><Link href="/" className="text-[#0645ad] hover:underline">Main page (Logs)</Link></li>
                <li><Link href="/wiki" className="text-[#0645ad] hover:underline">Wiki Contents</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-[#54595d] border-b border-[#c8ccd1] pb-1 mb-2">Connect</h3>
              <ul className="space-y-1.5 text-[13px]">
                <li><a href="https://github.com/pjy010218" target="_blank" rel="noreferrer" className="text-[#0645ad] hover:underline">GitHub</a></li>
                <li><a href="https://linkedin.com/in/pjy010218" target="_blank" rel="noreferrer" className="text-[#0645ad] hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden w-full bg-[#f6f6f6] border-b border-[#a7d7f9] p-4 flex justify-between items-center fixed top-0 z-50">
          <Link href="/" className="font-serif text-black tracking-tight text-lg font-bold">
            PJY Wiki
          </Link>
          <div className="flex gap-4 text-sm">
             <Link href="/" className="text-[#0645ad]">Logs</Link>
             <Link href="/wiki" className="text-[#0645ad]">Wiki</Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow pt-16 md:pt-0">
          {children}
        </div>

      </body>
    </html>
  );
}

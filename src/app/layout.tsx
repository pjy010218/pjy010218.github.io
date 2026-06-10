import type { Metadata } from "next";
import { Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const crimsonPro = Crimson_Pro({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junyeong Park | Research Log",
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
      className={`${crimsonPro.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative font-serif text-[#111] bg-[#f8f9fa]">
        {/* Main Content Area */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Bottom-Left Brutalist Anchor */}
        <div className="fixed bottom-[50px] left-[50px] flex items-end gap-12 z-50 pointer-events-none">
          {/* Logo */}
          <div className="font-serif font-bold text-5xl leading-none pointer-events-auto">
            <span className="block">P</span>
            <span className="block">J</span>
            <span className="block">Y</span>
          </div>

          {/* Profile & Navigation */}
          <div className="pb-1 pointer-events-auto">
            <p className="text-sm font-serif max-w-[280px] mb-4 text-[#333]">
              <strong>Junyeong Park</strong><br/>
              Researching autonomous LLM agents and contextual data loss prevention (CLEAR). 
              Information Security student at Sejong University.
            </p>
            <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest font-semibold">
              <Link href="/" className="text-blue-700 hover:text-black transition-colors">
                Research Logs
              </Link>
              <Link href="/wiki" className="text-[#888] hover:text-black transition-colors">
                Wiki
              </Link>
            </nav>
          </div>
        </div>
      </body>
    </html>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

interface PageLink {
  slug: string;
  title: string;
  date?: string;
}

interface Category {
  name: string;
  pages: PageLink[];
}

export default function HomeAccordion({ categories }: { categories: Category[] }) {
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.name || null);

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.name} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <button
            onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-xl transition-colors duration-300 ${openCategory === category.name ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400 group-hover:text-gray-600'}`}>
                <FileText size={20} />
              </div>
              <span className="text-lg font-semibold text-gray-800">{category.name}</span>
            </div>
            <motion.div
              animate={{ rotate: openCategory === category.name ? 90 : 0 }}
              className="text-gray-400"
            >
              <ChevronRight size={20} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openCategory === category.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-6 pt-2 space-y-3">
                  {category.pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/wiki/${page.slug}`}
                      className="flex items-center justify-between group/item p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-600 group-hover/item:text-blue-600 transition-colors duration-200">
                        {page.title}
                      </span>
                      {page.date && (
                        <span className="text-xs text-gray-400 font-mono">
                          {page.date}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

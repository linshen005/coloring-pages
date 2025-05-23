import Link from 'next/link';
import { categoryData } from '@/app/data/categoryMap';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-comic">
            Free Printable Coloring Pages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-comic">
            Discover our collection of beautiful coloring pages for kids and adults. 
            Choose from various categories including Pokemon, animals, flowers, and more. 
            All pages are free to download and print.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Object.entries(categoryData).map(([id, category]) => (
            <article 
              key={id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-[300px] flex flex-col"
            >
              <div className="h-[240px] w-full relative bg-gray-50 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={category.images[0].imageUrl}
                    alt={`${category.title} preview`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <h2 className="text-2xl font-bold font-comic">{category.title}</h2>
                <Link
                  href={`/category/${id}`}
                  className="inline-block w-full bg-pink-500 hover:bg-pink-600 text-white text-center font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] font-comic"
                >
                  View Pages
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { categoryData } from './data/categoryMap';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Printable Coloring Pages
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our collection of beautiful coloring pages for kids and adults. 
            Choose from various categories including Pokemon, animals, flowers, and more. 
            All pages are free to download and print.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categoryData).map(([id, category]) => (
            <article 
              key={id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={category.images[0].imageUrl}
                  alt={`${category.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={id === 'pokemon' || id === 'cat'}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <Link
                  href={`/category/${id}`}
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
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

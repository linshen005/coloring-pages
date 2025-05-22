import Image from 'next/image';
import { categoryData } from '@/app/data/categoryMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemon Coloring Pages',
  description: 'Download and print free Pokemon coloring pages like Pikachu, Charizard, and more.',
  alternates: {
    canonical: 'https://coloringpageprint.com/pokemon',
  },
  openGraph: {
    title: 'Pokemon Coloring Pages',
    description: 'Download and print free Pokemon coloring pages like Pikachu, Charizard, and more.',
    url: 'https://coloringpageprint.com/pokemon',
  },
};

export default function PokemonColoringPages() {
  const pokemonPages = categoryData.pokemon.images;

  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Pokemon Coloring Pages</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Bring your favorite Pokemon to life with our collection of free printable coloring pages. 
            Perfect for Pokemon fans of all ages, featuring beloved characters like Pikachu, 
            Charizard, and many more from the Pokemon universe.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pokemonPages.map((page) => (
            <article 
              key={page.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={page.imageUrl}
                  alt={`${page.title} coloring page`}
                  title={page.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={page.id <= 3}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-3">{page.title}</h2>
                <a
                  href={page.pdf}
                  download
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 
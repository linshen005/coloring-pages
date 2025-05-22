import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categoryData } from '@/app/data/categoryMap';
import type { Metadata } from 'next';

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoryData[params.id as keyof typeof categoryData];
  
  if (!category) {
    return {
      title: 'Page Not Found',
      description: 'The requested coloring page category could not be found.',
      alternates: {
        canonical: `https://coloringpageprint.com/category/${params.id}`,
      },
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `https://coloringpageprint.com/category/${params.id}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://coloringpageprint.com/category/${params.id}`,
      images: [{ url: category.images[0].imageUrl }],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categoryData[params.id as keyof typeof categoryData];
  
  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {category.description}
        </p>
      </div>

      {/* Images Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.images.map((image) => (
          <div 
            key={image.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{image.title}</h2>
              <a
                href={image.pdf}
                download
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors inline-block"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 
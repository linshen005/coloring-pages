import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categoryData } from '@/app/data/categoryMap';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

type Props = {
  params: { id: string }
};

// 检查PDF文件是否存在
function checkPdfExists(pdfPath: string): boolean {
  const fullPath = path.join(process.cwd(), 'public', pdfPath);
  return fs.existsSync(fullPath);
}

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
    <main className="min-h-screen p-4 md:p-8 bg-[#fdf6e3]">
      {/* Page Title and Description */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 font-comic text-center">{category.title}</h1>
        <p className="text-lg text-gray-600 font-comic text-center max-w-3xl mx-auto mb-8">
          {category.description}
        </p>
        <div className="w-full h-[2px] bg-pink-200 max-w-2xl mx-auto mb-12"></div>
      </div>

      {/* Images Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {category.images.map((image) => {
          const pdfExists = checkPdfExists(image.pdf);
          
          return (
            <div 
              key={image.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-[300px] flex flex-col"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-5 flex flex-col gap-4">
                <h2 className="text-xl font-bold font-comic">{image.title}</h2>
                {pdfExists ? (
                  <a
                    href={image.pdf}
                    download
                    className="inline-block w-full bg-pink-500 hover:bg-pink-600 text-white text-center font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] font-comic"
                  >
                    Download PDF
                  </a>
                ) : (
                  <div className="inline-block w-full bg-gray-400 text-white text-center font-bold py-3 px-6 rounded-full font-comic cursor-not-allowed">
                    PDF Not Available
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
} 
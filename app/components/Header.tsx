import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Coloring Pages
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/category/pokemon" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Pokemon
            </Link>
            <Link href="/category/animals" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Animals
            </Link>
            <Link href="/category/disney" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Disney
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 
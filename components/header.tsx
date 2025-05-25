// import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                ON-tech
              </span>
            </div>
            {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Strona główna
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Produkty
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                O nas
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Kontakt
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

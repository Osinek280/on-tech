export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="mailto:biuro@on-tech.net.pl" className="text-gray-400 hover:text-gray-500">
            biuro@on-tech.net.pl
          </a>
          <span className="text-gray-400">|</span>
          <a href="tel:+48123456789" className="text-gray-400 hover:text-gray-500">
            +48 123 456 789
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2023 ParapetyPL. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
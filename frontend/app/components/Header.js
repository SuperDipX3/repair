// Header.js
export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl">My Website</h1>
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </nav>
      </header>
    );
  }
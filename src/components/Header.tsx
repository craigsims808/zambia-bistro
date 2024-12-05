import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-brown">
            Zambia Bistro
          </Link>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="text-brown hover:text-primary">
              About
            </a>
            <a href="#menu" className="text-brown hover:text-primary">
              Menu
            </a>
            <a href="#contact" className="text-brown hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
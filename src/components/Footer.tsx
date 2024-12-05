export const Footer = () => {
  return (
    <footer className="bg-brown py-8 text-cream">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Taste of Zambia</h3>
            <p className="text-cream/80">
              Bringing authentic Zambian flavors to your table.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-cream/80 hover:text-cream">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/80 hover:text-cream">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-cream">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
            <div className="space-x-4">
              <a
                href="#"
                className="text-cream/80 hover:text-cream"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-cream"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-cream/20 pt-8 text-center text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Taste of Zambia. All rights reserved. Designed by <a href="https://craigsims.pages.dev"><u>Craig Sims</u></a></p>
        </div>
      </div>
    </footer>
  );
};
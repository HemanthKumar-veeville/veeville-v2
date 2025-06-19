import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export const Welcome = (): JSX.Element => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <div className="h-full max-w-[1200px] mx-auto flex flex-col px-8">
        {/* Header with logo and navigation */}
        <header className="w-full pt-6 flex-none flex justify-between items-start">
          <div className="w-36 sm:w-40 lg:w-48">
            <img
              src="https://veeville.com/wp-content/uploads/2023/05/VeevilleLogo.png"
              alt="Veeville Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          <nav className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="text-lg text-[#848688] hover:text-gray-900 transition-colors"
              >
                WORK
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/about"
                className="text-lg text-[#848688] hover:text-gray-900 transition-colors"
              >
                ABOUT
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="text-lg text-[#848688] hover:text-gray-900 transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 py-6 flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">Namaskara!</h1>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
                Veeville is a global integrated marketing company that offers an
                assortment of marketing services to organisations across a
                multitude of sectors including information technology, retail,
                healthcare, FMCG, hospitality, food & beverage, manufacturing
                and more.
              </p>

              <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
                Our solutions include brand strategy, creative development,
                campaign planning and execution, on-ground experience design,
                digital marketing and custom technology design. We also provide
                services like public relations, media planning & buying, and
                performance tracking & optimisation through our partner
                organisations for our clients across the globe.
              </p>

              <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
                Explore this site and discover some of our recent work.
              </p>
            </div>
          </div>

          <div className="w-48 sm:w-56 lg:w-64 flex-shrink-0">
            <img
              src="https://veeville.com/wp-content/uploads/2023/05/Tagline-1536x1536.png"
              alt="If thou hast no horse thou must work thy ass off - Veeville motto"
              className="w-full h-auto object-contain"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 flex-none border-t border-gray-200">
          <div className="grid grid-cols-4 gap-8">
            {/* Column 1 - Copyright */}
            <div className="col-span-1">
              <p className="text-[#848688] text-sm">© 2023</p>
              <p className="text-[#848688] italic">Veeville</p>
            </div>

            {/* Column 2 - Primary Links */}
            <div className="col-span-1 flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                About
              </Link>
              <Link
                to="/our-clients"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Our Clients
              </Link>
              <Link
                to="/our-work"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Our Work
              </Link>
              <Link
                to="/experiences"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Veeville Experiences
              </Link>
              <Link
                to="/careers"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Contact
              </Link>
            </div>

            {/* Column 3 - Secondary Links */}
            <div className="col-span-1 flex flex-col space-y-2">
              <Link
                to="/terms"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/sitemap"
                className="text-[#848688] hover:text-gray-900 text-sm"
              >
                Site Map
              </Link>
            </div>

            {/* Column 4 - Social Links */}
            <div className="col-span-1 flex justify-end space-x-4">
              <a
                href="https://instagram.com"
                className="text-[#848688] hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-[#848688] hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

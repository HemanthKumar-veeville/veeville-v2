import { Link } from "react-router-dom";
import {
  Briefcase,
  Info,
  Mail,
  FileText,
  Users,
  Building2,
  MapPin,
  Shield,
  Map,
} from "lucide-react";
import { useEffect, useState } from "react";

const Welcome = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* Header with logo and navigation */}
      <header className="w-full pt-8 md:pt-10 flex-none flex justify-between items-start px-8 md:px-12">
        <div className="w-36 sm:w-40 lg:w-48 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="/">
            <div className="col-span-2 md:col-span-1">
              <p className="text-[#848688] italic font-['Georgia'] text-[36px] leading-relaxed">
                Veeville.
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex flex-col items-start space-y-2">
          <div className="group flex items-center gap-3">
            <Link
              to="/work"
              className="text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
            >
              WORK
            </Link>
          </div>
          <div className="group flex items-center gap-3">
            <Link
              to="/clients"
              className="text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
            >
              CLIENTS
            </Link>
          </div>
          <div className="group flex items-center gap-3">
            <Link
              to="/about"
              className="text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
            >
              ABOUT
            </Link>
          </div>
          <div className="group flex items-center gap-3">
            <Link
              to="/contact"
              className="text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mb-16 mx-auto">
        <div className="max-w-2xl w-full md:w-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 md:mb-10 text-[#848688] tracking-tight">
            Namaskara!
          </h1>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
              Veeville is a global integrated marketing company that offers an
              assortment of marketing services to organisations across a
              multitude of sectors including information technology, retail,
              healthcare, FMCG, hospitality, food & beverage, manufacturing and
              more.
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
      </main>
    </div>
  );
};

export default Welcome;

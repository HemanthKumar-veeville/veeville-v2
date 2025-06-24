import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import CustomCursor from "./CustomCursor";
import ScrollToTop from "./ScrollToTop";
import FloatingMenu from "./FloatingMenu";
import RouteTransition from "./RouteTransition";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <FloatingMenu />
      <RouteTransition>
        <div className="w-full overflow-x-hidden bg-white relative min-h-screen">
          {/* Overlay for better text readability */}
          <div className="fixed inset-0 bg-white/40 backdrop-blur-[1px]"></div>

          <div className="min-h-screen max-w-screen mx-auto flex flex-col px-8 md:px-12 relative z-10">
            <div className="flex-1 flex flex-col">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </RouteTransition>
    </>
  );
};

export default Layout;

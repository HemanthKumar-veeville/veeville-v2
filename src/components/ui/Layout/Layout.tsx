import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import CustomCursor from "../CustomCursor";
import ScrollToTop from "../ScrollToTop";
import FloatingMenu from "../FloatingMenu";

const Layout = () => {
  const location = useLocation();
  const isWelcomePage =
    location.pathname === "/" || location.pathname === "/welcome";

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      {!isWelcomePage && <FloatingMenu />}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <div className="flex-1 flex flex-col px-8 md:px-12">
        <Footer />
      </div>
    </>
  );
};

export default Layout;

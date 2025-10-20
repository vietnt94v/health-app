import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui";

const LoginLayout = () => {
  return (
    <>
      <div className="h-lvh flex flex-col">
        <Header />
        <main className="pt-16 flex-grow">
          <Outlet />
        </main>
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default LoginLayout;

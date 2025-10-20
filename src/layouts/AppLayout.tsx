import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default AppLayout;

import { useEffect, useState } from "react";
import BackToTopIcon from "@/assets/icons/back-to-top.png";

const BackToTop = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow && (
        <div
          className="fixed bottom-[40%] right-10 lg:right-24 size-12 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src={BackToTopIcon}
            alt="Back to top"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default BackToTop;

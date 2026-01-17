import { useEffect } from "react";
import { useHeaderActionStore } from "../../store/PageTitleStore";
import { useBannerContentActionStore } from "../../store/bannerContentStore";
import banner from "../../assets/images/background/2.jpeg";
function Landing() {
  const setHeader = useHeaderActionStore((s) => s.setHeader);
  const setBannerContent = useBannerContentActionStore(
    (state) => state.setBannerContent
  );

  useEffect(() => {
    setHeader({
      headTitle: " ",
      saveAction: false,
    });

    setBannerContent({
      pageTitle: "Home",
      pageDescription: "Description",
      pageImage: banner,
    });
  }, [setHeader, setBannerContent]);
  return <div></div>;
}

export default Landing;

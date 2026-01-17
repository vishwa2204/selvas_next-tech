import { useEffect } from "react";
import { useHeaderActionStore } from "../../store/PageTitleStore";
import { useBannerContentActionStore } from "../../store/bannerContentStore";
import banner from "../../assets/images/background/2.jpeg";

function AboutPage() {
  const setHeader = useHeaderActionStore((s) => s.setHeader);
  const setBannerContent = useBannerContentActionStore(
    (state) => state.setBannerContent
  );
  useEffect(() => {
    setHeader({
      headTitle: "About Page",
      saveAction: true,
      onSave: () => {
        console.log("Chart saved");
      },
    });
    setBannerContent({
      pageTitle: "About",
      pageDescription: "Description",
      pageImage: banner,
    });
  }, [setHeader, setBannerContent]);
  return (
    <>
      <div className="aboutPageContainer"></div>
    </>
  );
}

export default AboutPage;

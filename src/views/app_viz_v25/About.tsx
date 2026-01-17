import { useEffect } from "react";
import { useHeaderActionStore } from "../../store/PageTitleStore";

function AboutPage() {
  const setHeader = useHeaderActionStore((s) => s.setHeader);

  useEffect(() => {
    setHeader({
      headTitle: "About Page",
      saveAction: true,
      onSave: () => {
        console.log("Chart saved");
      },
    });
  }, [setHeader]);
  return (
    <>
      <div className="aboutPageContainer"></div>
    </>
  );
}

export default AboutPage;

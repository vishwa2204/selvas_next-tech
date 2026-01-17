import { useEffect } from "react";
import { useHeaderActionStore } from "../../store/PageTitleStore";

function ChartCreation() {
  const setHeader = useHeaderActionStore((s) => s.setHeader);

  useEffect(() => {
    setHeader({
      headTitle: "Chart Creation",
      saveAction: true,
      onSave: () => {
        console.log("Chart saved");
      },
    });
  }, [setHeader]);
  return (
    <>
      <div className="chartCreationContainer">
        <div className="creationInputForms">
          <form action="">
            <div className="chartNameContainer">
              <label htmlFor="chartName"></label>
              <input type="text" id="chartName" placeholder="Chart Name" />
            </div>
            <div className="confirmNameContainer">
              <label htmlFor="confirmChartName"></label>
              <input
                type="text"
                id="confirmChartName"
                placeholder="Confirm Chart Name"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChartCreation;

import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Concepts from "../SideBar/sideBar-components/Concepts";
import Resources from "../SideBar/sideBar-components/Resources";
import Scenarios from "../SideBar/sideBar-components/Scenarios";

function Main({ data }) {
  const [selectedTab, setSelectedTab] = useState("Concepts");
  const [value, setValue] = useState(null);
  const [conc, setConc] = useState(null);
  const [res, setRes] = useState(null);
  const [sce, setSce] = useState(null);

  // object for side bar components so we can crate tab
  const tabComponents = {
    Concepts: <Concepts data={conc} />,
    Resources: <Resources data={res} />,
    Scenarios: <Scenarios data={sce} />,
  };

  useEffect(() => {
    setValue(data);
  }, [data]);

  useEffect(() => {
    if (value) {
      setConc(value[0]?.tabs[0]?.list);
      setRes(value[0]?.tabs[2]?.list);
      setSce(value[0]?.tabs[1]?.list);
    }
  }, [value]);

  // callback function to handel components on basis of selection of side bar
  function handleTab(data) {
    setSelectedTab(data);
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 lg:w-1/5 xl:w-1/6">
        <SideBar handleTab={handleTab} />
      </div>
      {/* Content */}
      <div className="md:ml-0 md:w-3/4 lg:w-4/5 xl:w-5/6">
        {/* by default we check selected tab is present or not and on basis of that we load component */}
        {selectedTab && tabComponents[selectedTab]}
      </div>
    </div>
  );
}

export default Main;

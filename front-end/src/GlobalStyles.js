import React, { useEffect, useState } from "react";
import { GlobalReset } from "./Global.styled";

export default function GlobalStyles() {
  const [initialSetUp, setInitialSetUp] = useState({
    vh: `${window.innerHeight * 0.01}px`,
    bottomBarClearance: null,
  });
  // console.log("GS rendered");
  useEffect(() => {
    const element = document.getElementById("bottomBar");
    // console.log(element);

    console.log("gsEff rendered");
    // console.log("bug", element.clientHeight);
    // console.log("innerheight", window.innerHeight);
    setInitialSetUp({
      ...initialSetUp,
      bottomBarClearance: element.clientHeight,
    });

    window.addEventListener("resize", () => {
      setInitialSetUp({
        vh: `${window.innerHeight * 0.01}px`,
        bottomBarClearance: element.clientHeight,
      });
    });
  }, []);

  return <GlobalReset {...initialSetUp} />;
}

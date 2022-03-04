import React, { useEffect, useState } from "react";
import { GlobalReset } from "./Global.styled";

export default function GlobalStyles() {
  const [initialSetUp, setInitialSetUp] = useState({
    vh: `${window.innerHeight * 0.01}px`,
    bottomBarClearance: null,
  });
  console.log(window.innerHeight);
  useEffect(() => {
    const element = document.getElementById("bottomBar");
    // // console.log(element);

    window.addEventListener("resize", () => {
      console.log("gs rendered");

      setInitialSetUp({
        vh: `${window.innerHeight * 0.01}px`,
        bottomBarClearance: element.getBoundingClientRect.height,
      });
    });
  }, []);

  return <GlobalReset {...initialSetUp} />;
}

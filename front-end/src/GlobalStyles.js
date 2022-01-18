import React, { useEffect, useState } from "react";
import { GlobalReset } from "./Global.styled";

export default function GlobalStyles() {
  const [vh, setVh] = useState(`${window.innerHeight * 0.01}px`);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("gs rendered");

      setVh(`${window.innerHeight * 0.01}px`);
    });
  }, []);

  return <GlobalReset vh={vh} />;
}

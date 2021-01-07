import React, { useEffect, useRef, useState } from "react";

const useBeforeLeave = (onLeave) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onLeave();
    }
  };

  useEffect(() => {
    if (typeof onLeave !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begForLife = () => console.log("Pls don't leave!");
  useBeforeLeave(begForLife);
  return (
    <div onMouseLeave={useBeforeLeave} className="App">
    </div>
  );
}

export default App;

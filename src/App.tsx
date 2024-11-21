import { useEffect, useRef } from "react";

import WebGL from "three/addons/capabilities/WebGL.js";

// import { cube } from "./practice/cube";
// import { drawLine } from "./practice/line";
// import { import3D } from "./practice/3dImport";

import World from "./world/world";

import "./App.css";

function App() {
  const worlRef = useRef<World>();
  useEffect(() => {
    const container = document.getElementById("scene-container") as HTMLElement;
    if (WebGL.isWebGL2Available()) {
      const world = new World({ container });
      worlRef.current = world;
    } else {
      const warning = WebGL.getWebGL2ErrorMessage();
      container.appendChild(warning);
    }
  }, []);

  function handleClick() {
    worlRef.current?.render();
  }

  return (
    <>
      <p>
        <button onClick={handleClick}>click me</button>
      </p>
      <div id="scene-container"></div>
    </>
  );
}

export default App;

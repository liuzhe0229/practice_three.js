import { useEffect } from "react";

import WebGL from "three/addons/capabilities/WebGL.js";

// import { cube } from "./practice/cube";
// import { drawLine } from "./practice/line";
import { import3D } from "./practice/3dImport";

import "./App.css";

function App() {
  useEffect(() => {
    const container = document.getElementById("scene-container") as HTMLElement;
    if (WebGL.isWebGL2Available()) {
      import3D(container);
    } else {
      const warning = WebGL.getWebGL2ErrorMessage();
      container.appendChild(warning);
    }
  }, []);

  return (
    <>
      <div id="scene-container"></div>
    </>
  );
}

export default App;

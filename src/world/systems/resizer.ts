import { PerspectiveCamera, WebGLRenderer } from "three";

class Resizer {
  constructor(container: HTMLElement, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    // Set the camera's aspect ratio
    const { width, height } = container.getBoundingClientRect();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    camera.position.set(1000, 1000, 1000);
    camera.lookAt(0, 0, 0);
    // update the size of the renderer AND the canvas
    renderer.setSize(width, height);


    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}
export { Resizer };
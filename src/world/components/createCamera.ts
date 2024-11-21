import { PerspectiveCamera } from "three";

function createCamera(ov?: number, aspect?: number, near?: number, far?: number) {
  const camera = new PerspectiveCamera(ov, aspect, near, far);
  return camera;
}

export default createCamera;
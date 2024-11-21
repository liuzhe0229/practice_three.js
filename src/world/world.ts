import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import createCamera from "./components/createCamera";
import createCube from "./components/createCube";
import createScene from "./components/createScene";
import createBall from "./components/createBall";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";

export interface IProps {
  container: HTMLElement | string;
}

export interface IWorld {
  container: HTMLElement;

}

class World {
  private container: HTMLElement | null;
  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(props: IProps) {
    const { container } = props;
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    if (!container || !this.container) {
      throw (new Error(`Can't find the container element `));
    }

    this.camera = createCamera(45, 1, 1, 8000);
    this.scene = createScene({ background: 'rgba(106,193,116,0.5)' });
    this.renderer = createRenderer();
    this.container?.append(this.renderer.domElement);


    const cube = createCube({ width: 100, height: 100, depth: 100, color: 'red' });
    this.scene.add(cube);

    const ball = createBall(20, 'green');
    this.scene.add(ball);

    new Resizer(this.container, this.camera, this.renderer);
  }

  render() {

    this.renderer.render(this.scene, this.camera);

  }
}

export default World;
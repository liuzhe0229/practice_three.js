import { Scene, Color } from "three";

interface IProps {
  background?: string;
}

function createScene(props?: IProps) {
  const { background = 'skyblue' } = props ?? {};
  const scene = new Scene();
  scene.background = new Color(background);
  return scene;
}

export default createScene;
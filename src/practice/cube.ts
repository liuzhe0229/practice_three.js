import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export function cube(container: HTMLElement) {
  const width = container.getBoundingClientRect().width; //宽度
  const height = container.getBoundingClientRect().height; //高度
  // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  const camera = new PerspectiveCamera(30, width / height, 1, 8000);
  // create a Scene
  const scene = new Scene();

  const geometry = new BoxGeometry(100, 100, 100);
  const material = new MeshBasicMaterial({
    color: "#5dbaef", //0xff0000设置材质颜色为红色
  });
  const mesh = new Mesh(geometry, material); //网格模型对象Mesh
  mesh.position.set(100, 0, 0);
  scene.add(mesh);
  camera.position.set(1800, 1800, 1800);
  camera.lookAt(mesh.position);

  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);

  renderer.render(scene, camera);
  container.appendChild(renderer.domElement);

  function animate() {
    mesh.rotation.x += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}
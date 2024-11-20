import { WebGLRenderer, PerspectiveCamera, Scene, AmbientLight, PointLight, Box3, Vector3, Color } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function import3D(container: HTMLElement) {
  const { width, height } = container.getBoundingClientRect();
  // renderer
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
  renderer.setPixelRatio(window.devicePixelRatio);
  console.log(window.devicePixelRatio);

  // camera
  const camera = new PerspectiveCamera(45, width / height, 1, 3000);
  camera.position.set(0, 0, 1000);

  // Scene
  const scene = new Scene();
  scene.background = new Color('skyblue');

  // Light
  const ambientLight = new AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
  const pointLight = new PointLight(0xffffff, 1);
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  // GLTF Loader
  const loader = new GLTFLoader();

  loader.load('./brain.glb', function (gltf) {

    const model = gltf.scene;
    model.scale.set(10, 10, 10); // 调整缩放比例
    scene.add(model);

    // 自动调整相机视角
    const box = new Box3().setFromObject(model);
    const size = new Vector3();
    box.getSize(size);

    const center = new Vector3();
    box.getCenter(center);

    camera.position.set(center.x, center.y, size.z * 2);
    camera.lookAt(center);
  }, undefined, function (error) {
    console.error(error);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

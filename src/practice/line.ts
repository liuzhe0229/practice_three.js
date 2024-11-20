import {
  WebGLRenderer,
  PerspectiveCamera,
  MeshBasicMaterial,
  Mesh,
  Scene,
  LineDashedMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export function drawLine(container: HTMLElement) {
  const { width, height } = container.getBoundingClientRect();
  // renderer
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  //camera
  const camera = new PerspectiveCamera(45, width / height, 1, 3000);
  camera.position.set(0, 0, 1000);
  camera.lookAt(0, 0, 0);

  //Scene
  const scene = new Scene();

  // meterial
  const material = new LineDashedMaterial({ color: 0x0000ff });

  // content
  const points = [];
  points.push(new Vector3(- 10, 0, 0))
  points.push(new Vector3(0, 10, 0))
  points.push(new Vector3(10, 0, 0))

  const geometry = new BufferGeometry().setFromPoints(points);

  const line = new Line(geometry, material)

  scene.add(line);

  const loader = new FontLoader();


  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

    const textGeometry = new TextGeometry('Hello three.js!', {
      font: font,
      size: 30,
      depth: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5
    });
    const textMaterial = new MeshBasicMaterial({ color: '#fff' });
    const textMesh = new Mesh(textGeometry, textMaterial);
    textMesh.position.set(100, 0, 100);
    scene.add(textMesh);
    renderer.render(scene, camera);
  });

  renderer.render(scene, camera);

}
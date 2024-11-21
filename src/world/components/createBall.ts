import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";


function createBall(radius: number, color: string) {
  const sphere = new SphereGeometry(radius);
  const materail = new MeshBasicMaterial({ color })
  const mesh = new Mesh(sphere, materail);

  mesh.position.set(300, 0, 0);

  return mesh;
}

export default createBall;
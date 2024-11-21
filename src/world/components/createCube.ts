import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

interface IBoxProps {
  width?: number;
  height?: number;
  depth?: number;
  color: string;
}

function createCube({ width, height, depth, color }: IBoxProps) {
  const geometry = new BoxGeometry(width, height, depth);
  const meterial = new MeshBasicMaterial({ color });

  const mesh = new Mesh(geometry, meterial);
  mesh.position.set(100, 0, 0);

  return mesh;
}

export default createCube;
import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "./8k_mars4.jpg";

export default function Mars() {
  const myMesh = React.useRef()
  useFrame(() => {
    
    myMesh.current.rotation.y -= 1/70;
  })
  const colorMap = useLoader(TextureLoader, texture);
  
  return (
  
    <mesh ref={myMesh} onClick={(e) => console.log('click')}>
      
      <sphereBufferGeometry args={[2, 32, 32]} attach="geometry" />
      <meshNormalMaterial attach="material" />
      <meshStandardMaterial map={colorMap} />
    </mesh>
    
  );
}
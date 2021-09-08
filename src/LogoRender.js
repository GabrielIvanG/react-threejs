import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function Model(props) {
  const group = useRef();
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, '/logoRender.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  useFrame(() => {
    mesh.current.rotation.z += 0.01;
  });
  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        {console.log(gltf)}
        <mesh ref={mesh} name="Curve" rotation={[1.5, 0, 0]} scale={[30, 30, 30]}>
          <bufferGeometry attach="geometry" {...gltf.nodes.Curve.geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.nodes.Curve.material}
            color={0xcc9933}
            metalness={1}
            roughness={0.6}
            name="SVGMat"
          />
        </mesh>
      </scene>
    </group>
  );
}

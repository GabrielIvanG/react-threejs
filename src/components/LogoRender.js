import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import './logo.css';
import Logo from '../LogoRender';
import { OrbitControls, useHelper, SpotLight, Reflector } from '@react-three/drei';

function Lights() {
  return (
    <SpotLight
      intensity={10}
      position={[0, -10, 0]}
      distance={20}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

export default function LogoRender() {
  return (
    <>
      <Canvas>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Lights />
        <directionalLight intensity={3} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <Logo position={[0, -1, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
}

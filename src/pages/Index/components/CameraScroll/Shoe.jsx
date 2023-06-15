import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { editable as e } from '@theatre/r3f';
import { useScroll } from 'framer-motion';
import { getProject } from '@theatre/core';
import demoProjectState from '../../../../data/CameraScroll.theatre-project-state.json';

const demoSheet = getProject('Demo Project', { state: demoProjectState }).sheet('Demo Sheet');

const Shoe = () => {
  const { nodes, materials, scene } = useGLTF(
    require('../../../../assets/models/nike_air_zoom_pegasus_36-transformed.glb')
  );
  const shoeRef = useRef();
  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        // make Shoe is under effect of Rings s light + CubeCamera
        object.material.envMapIntensity = 20;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    // scroll threater
    if (scrollY.current > window.innerHeight) {
      const bodyHeight = document.querySelector('body').scrollHeight;
      const delay = window.innerHeight / (bodyHeight - window.innerHeight);
      if (scrollYProgress.current - delay > 0) {
        demoSheet.sequence.position = (scrollYProgress.current - delay) * 7;
      }
    }
    // shoes s animation
    const t = state.clock.getElapsedTime();
    shoeRef.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4 + 3, 0.15 + Math.sin(t / 2) / 8);
    shoeRef.current.position.y = (0.5 + Math.cos(t / 2)) / 6 + 0.8;
  });

  return (
    <e.mesh
      theatreKey='Shoe'
      ref={shoeRef}
      rotation-y={3}
      position={[0, 1, 0]}
      receiveShadow
      castShadow
      geometry={nodes.defaultMaterial.geometry}
      material={materials.NikeShoe}
    />
  );
};

export default Shoe;

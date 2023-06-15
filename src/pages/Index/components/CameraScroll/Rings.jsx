import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

const Rings = () => {
  const itemsRef = useRef([]);

  useFrame((state) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      let dist = Math.abs(z);
      mesh.position.set(0, 0, -z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      // change color
      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 === 1) {
        mesh.material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(colorScale);
      } else {
        mesh.material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(colorScale);
      }
    }
  });

  return (
    <>
      {Array(14)
        .fill(0)
        .map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
          >
            <torusGeometry args={[3.35, 0.05, 16, 100]} />
            <meshStandardMaterial
              color={[0, 0, 0]}
              emissive={[0.5, 0.5, 0.5]}
            />
          </mesh>
        ))}
    </>
  );
};

export default Rings;

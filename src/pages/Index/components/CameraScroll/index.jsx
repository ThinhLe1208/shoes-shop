import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CubeCamera, Environment } from '@react-three/drei';
// theatre
import { getProject } from '@theatre/core';
// import studio from '@theatre/studio';
// import extension from '@theatre/r3f/dist/extension';
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f';

import styles from './styles.module.scss';
import Shoe from './Shoe';
import Ground from './Ground';
import Rings from './Rings';
import Boxes from './Boxes';
import demoProjectState from 'data/CameraScroll.theatre-project-state.json';

// theatre turn on/off UI
// studio.initialize();
// studio.extend(extension);
// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project', { state: demoProjectState }).sheet('Demo Sheet');

const CameraScroll = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <SheetProvider sheet={demoSheet}>
          <Show />
          <Ground />
        </SheetProvider>
      </Canvas>
    </div>
  );
};

export default CameraScroll;

const Show = () => {
  return (
    <>
      <PerspectiveCamera
        theatreKey='Camera'
        makeDefault
        fov={50}
        position={[0, 30, 5]}
        rotation={[-1, 0, 1]}
      />

      <color
        args={[0, 0, 0]}
        attach={'background'}
      />

      {/* make Shoe is under effect of Rings s light + envMapIntensity */}
      <CubeCamera>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Shoe />
          </>
        )}
      </CubeCamera>
      {/* 
      <Rings />
      <Boxes /> */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};

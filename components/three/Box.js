import React, { useState, useEffect } from 'react';

function Box({rotation}) {
  return (


    <mesh rotateZ={8} position={[0, 1, 0]} receiveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"lime"} />
    </mesh>
  );
}

  
export default Box;

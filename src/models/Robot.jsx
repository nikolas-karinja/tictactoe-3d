
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./models/robot.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.262}>
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Base} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Features}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/robot.glb')
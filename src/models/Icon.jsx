import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("./models/icon.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials["Default.001"]}
                position={[0.2, 0.2, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials.Default}
                position={[-0.2, 0.1, -0.2]}
            />
        </group>
    );
}

useGLTF.preload("./models/icon.glb");
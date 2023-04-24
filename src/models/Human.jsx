
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("./models/human.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.base_mesh001_Cylinder001.geometry}
                material={materials.Default}
            />
        </group>
    );
}

useGLTF.preload("./models/human.glb");
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("./models/board-1.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials.Default}
            />
        </group>
    );
}

useGLTF.preload("./models/board-1.glb");
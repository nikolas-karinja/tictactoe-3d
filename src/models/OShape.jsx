
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("./models/shape-o.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials.Default}
            />
        </group>
    );
}

useGLTF.preload("./models/shape-o.glb");
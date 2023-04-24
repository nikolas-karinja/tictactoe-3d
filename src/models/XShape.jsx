import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("./models/shape-x.glb");
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

useGLTF.preload("./models/shape-x.glb");

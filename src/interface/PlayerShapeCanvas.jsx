import { Canvas } from '@react-three/fiber'
import { Float, Preload } from '@react-three/drei'
import { Model as OShape } from '../models/OShape'
import { Model as XShape } from '../models/XShape'

const PlayerShapeCanvas = ( { player } ) => {
    
    const shapeRotation = [ Math.PI / 2.5, 0, 0 ]
    const shapeScale = 2

    return (
        <Canvas 
            camera={ { fov: 25 } }
            frameloop='always'
            gl={ { preserveDrawingBuffer: true } }>
            <hemisphereLight 
                groundColor='black'
                intensity={ 0.5 } />
            <directionalLight 
                castShadow
                intensity={ 2 }
                position={ [ -2.5, 10, 5 ] }
                shadow-mapSize={ 1024 } />
            <Float>
                <OShape 
                    rotation={ shapeRotation }
                    scale={ player === "O" ? shapeScale : 0 } />
                <XShape 
                    rotation={ shapeRotation }
                    scale={ player === "X" ? shapeScale : 0 } />
            </Float>

            <Preload />
        </Canvas>
    )

}

export default PlayerShapeCanvas
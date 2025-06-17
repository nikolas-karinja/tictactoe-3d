import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Preload } from '@react-three/drei'
import { Model as OShape } from '../models/OShape'
import { Model as XShape } from '../models/XShape'

const GameFinishedShapeCanvas = ( { player } ) => {
    
    const shapeRotation = [ Math.PI / 3, 0, 0 ]
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
            <OrbitControls 
                enablePan={ false }
                enableZoom={ false }/>
            <Float>
                { player === "X" ? 
                    <XShape 
                        rotation={ shapeRotation }
                        scale={ shapeScale } /> : 
                    <OShape 
                        rotation={ shapeRotation }
                        scale={ shapeScale } /> }
            </Float>

            <Preload />
        </Canvas>
    )

}

export default GameFinishedShapeCanvas
import { Canvas } from '@react-three/fiber'
import { Float, Preload } from '@react-three/drei'
import { Model as Human } from '../models/Human'
import { useEffect, useState } from 'react'
import { GAMEDATA, GAMERULES } from '../constants'
import { Robot } from '../models/Robot'

const PlayerTypeCanvas = () => {

    const [_, _update] = useState(Date.now())

    useEffect(() =>
    {
        window.addEventListener("update", () =>
        {
            _update(Date.now())
        })
    })

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
                position={ [ -2.5, 5, 5 ] }
                shadow-mapSize={ 1024 } />
            <Float>
                {GAMERULES.cpuPlayer && GAMEDATA.player === "O" ? 
                    <Robot
                        rotation={ [ 0, Math.PI * 3.15, 0 ] }
                        scale={ 2 } /> : 
                    <Human 
                        rotation={ [ 0, Math.PI / 4, 0 ] }
                        scale={ 2.5 } />}
            </Float>

            <Preload />
        </Canvas>
    )

}

export default PlayerTypeCanvas
import { ContactShadows, OrbitControls, Preload } from '@react-three/drei'
import { Model as Board1 } from '../models/Board1'
import { Canvas } from '@react-three/fiber'
import TurnData from './TurnData'
import AppData from './AppData'
import Board from './Board'
import { BOARD, GAMEDATA } from '../constants'
import { Model as OShape } from '../models/OShape'
import { Model as XShape } from '../models/XShape'
import { createEvent } from '../utils'
import { useEffect, useState } from 'react'
import GameFinished from './GameFinished'
import MiniHelp from './MiniHelp'

createEvent( 'move' )
createEvent( 'reset' )

const App = () => {

    const [ update, setUpdate ] = useState( false )

    useEffect( () => {

        window.addEventListener( 'move', () => setUpdate( Date.now() ) )
        window.addEventListener( 'reset', () => setUpdate( Date.now() ) )

    } )

    GAMEDATA.meshesO = []
    GAMEDATA.meshesX = []

    let bbI = 0

    for ( let i = 0; i < BOARD.positions.length; i++ ) {

        const bI = Math.floor( i / 3 )

        GAMEDATA.meshesO.push( <OShape 
            key={ i } 
            scale={ GAMEDATA.board[ bI ][ bbI ] === 1 ? 1 : 0 } 
            position={ [ BOARD.positions[ i ][ 0 ], 0, BOARD.positions[ i ][ 1 ] ] } /> )
        GAMEDATA.meshesX.push( <XShape 
            key={ i } 
            scale={ GAMEDATA.board[ bI ][ bbI ] === 0 ? 1 : 0 } 
            position={ [ BOARD.positions[ i ][ 0 ], 0, BOARD.positions[ i ][ 1 ] ] } /> )

        bbI++

        if ( bbI >= 3 ) bbI = 0

    }

    return ( 
        <>
            <Canvas
            camera={ { position: [ 2, 4, 2 ] } }
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
                    autoRotate={ GAMEDATA.gameFinished }
                    enablePan={ false }
                    enableZoom={ false } />
                <Board1 />
                <Board />
                { GAMEDATA.meshesO.map( ( m ) => ( m ) ) }
                { GAMEDATA.meshesX.map( ( m ) => ( m ) ) }
                <ContactShadows
                    scale={ 10 }
                    position={ [ 0, -0.2, 0 ] } />

                <Preload />
            </Canvas>
            <TurnData />
            <MiniHelp />
            <AppData />
            <GameFinished show={ GAMEDATA.gameFinished } />
        </>
    )

}

export default App
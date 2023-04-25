import { GAMEDATA } from '../constants'
import { changePlayers, dispatchEvent, playSound } from '../utils'

const BoardTile = ( { x, z, index } ) => {

    let i = index

    const onClick = () => {

        const c = Math.floor( i / 3 )
        const cc = i % 3

        if ( !GAMEDATA.gameFinished && GAMEDATA.board[ c ][ cc ] === 2 ) {

            GAMEDATA.board[ c ][ cc ] = GAMEDATA.player

            playSound( 'SFX', 'Place' )
            dispatchEvent( 'update' )
            changePlayers()

        }

    }

    return (
        <mesh 
            position={ [ x, 0, z ] } 
            onClick={ () => onClick() }>
            <boxGeometry args={ [ 1, 0.1, 1 ] } />
            <meshStandardMaterial 
                color={ Math.random() * 0xffffff } 
                opacity={ 0 }
                transparent={ true } />
        </mesh>
    )

}

export default BoardTile
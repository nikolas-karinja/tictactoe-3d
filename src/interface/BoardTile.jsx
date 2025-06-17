import { GAMEDATA } from '../constants'
import { makeMove } from '../utils'

const BoardTile = ( { x, z, index } ) => {

    let i = index

    const onClick = () => 
    {
        if (GAMEDATA.board[i] === null)
            makeMove(i, GAMEDATA.player)
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
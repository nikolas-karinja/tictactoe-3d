import { BOARD } from '../constants'
import BoardTile from './BoardTile'

const Board = () => {

    let count = 0

    return ( 
        <>
            { BOARD.positions.map( ( p ) => {

                count++

                return <BoardTile key={ count } x={ p[ 0 ] } z={ p[ 1 ] } index={ count - 1 } />

            } ) }
        </>
    )

}

export default Board
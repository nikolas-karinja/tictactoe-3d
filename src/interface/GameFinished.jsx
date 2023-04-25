import { GAMEDATA } from '../constants'
import '../sass/GameFinished.sass'
import { dispatchEvent, mainMenu, playSound, resetGame, stopSound } from '../utils'
import GameFinishedShapeCanvas from './GameFinishedShapeCanvas'

const GameFinished = ( { show } ) => {

    const onPlayAgain = () => {

        resetGame()
        playSound( 'UI', 'Button' )
        dispatchEvent( 'update' )

    }

    const onMainMenu = () => {

        mainMenu()
        playSound( 'UI', 'Button' )
        stopSound( 'House Music' )
        dispatchEvent( 'update' )

    }

    return (
        <div className='GameFinished' style={ { display: show ? 'inline-block' : 'none' } }>
            <div className='GameFinished-shapes'>
                <div className='GameFinished-shape' style={ { display: GAMEDATA.winner === 2 ? 'inline-block' : GAMEDATA.winner === 0 ? 'inline-block' : 'none' } }>
                    <GameFinishedShapeCanvas player={ 0 } />
                </div>
                <div className='GameFinished-shape' style={ { display: GAMEDATA.winner === 2 ? 'inline-block' : GAMEDATA.winner === 1 ? 'inline-block' : 'none' } }>
                    <GameFinishedShapeCanvas player={ 1 } />
                </div>
            </div>
            <div className='GameFinished-message'>{ GAMEDATA.winner === 2 ? 'Draw...' : 'Victory!' }</div>
            <div className='GameFinished-buttons'>
                <button className='GameFinished-button' onClick={ () => onPlayAgain() }>Play Again</button>
                <button className='GameFinished-button' onClick={ () => onMainMenu() }>Main Menu</button>
            </div>
        </div>
    )

}

export default GameFinished
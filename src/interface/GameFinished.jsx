import { GAMEDATA, GAMERULES } from '../constants'
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
    }

    return (
        <div className='GameFinished' style={ { display: show ? 'inline-block' : 'none' } }>
            <div className='GameFinished-shapes'>
                <div className='GameFinished-shape' style={ { display: GAMEDATA.winner === null ? 'inline-block' : GAMEDATA.winner === "X" ? 'inline-block' : 'none' } }>
                    <GameFinishedShapeCanvas player={ "X" } />
                </div>
                <div className='GameFinished-shape' style={ { display: GAMEDATA.winner === null ? 'inline-block' : GAMEDATA.winner === "O" ? 'inline-block' : 'none' } }>
                    <GameFinishedShapeCanvas player={ "O" } />
                </div>
            </div>
            <div className='GameFinished-message'>{ GAMEDATA.winner === null ? "Draw..." : 
                GAMERULES.cpuPlayer && GAMEDATA.winner === "O" ? "You lose..." : "Victory!" }</div>
            <div className='GameFinished-buttons'>
                <button className='GameFinished-button' onClick={ () => onPlayAgain() }>Play Again</button>
                <button className='GameFinished-button' onClick={ () => onMainMenu() }>Main Menu</button>
            </div>
        </div>
    )

}

export default GameFinished
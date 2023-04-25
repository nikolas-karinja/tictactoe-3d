import { GAMEDATA } from '../constants'
import '../sass/MainMenu.sass'
import { dispatchEvent } from '../utils'
import MainMenuCanvas from './MainMenuCanvas'

const MainMenu = ( { display } ) => {

    const onPlay = () => {

        GAMEDATA.gameStarted = true

        dispatchEvent( 'play' )

    }

    return (
        <div 
            className='MainMenu'
            style={ { display: display? 'inline-block' : 'none' } }>
            <div className='MainMenu-content'>
                <div className='MainMenu-title'>Tic-Tac-Toe!</div>
                <div className='MainMenu-canvas'>
                    <MainMenuCanvas />
                </div>
                <button className='MainMenu-button' onClick={ () => onPlay() }>Play</button>
                <button className='MainMenu-button disabled'>Settings</button>
                <button className='MainMenu-button disabled'>About</button>
                <div className='MainMenu-data'>Developed by Nikolas Karinja - 2023</div>
                <div className='MainMenu-data'>Built with React and Three.js</div>
            </div>
        </div>
    )

}

export default MainMenu
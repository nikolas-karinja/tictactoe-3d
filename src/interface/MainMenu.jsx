import { useEffect, useState } from 'react'
import { GAMEDATA, VERSION } from '../constants'
import '../sass/MainMenu.sass'
import { dispatchEvent, playSound, resetGame } from '../utils'
import MainMenuCanvas from './MainMenuCanvas'

const MainMenu = ( { display } ) => {

    const [ update, setUpdate ] = useState( Date.now() )

    const onPlay = () => {

        GAMEDATA.gameStarted = true
        GAMEDATA.mainMenuOpen = false

        resetGame()

        playSound( 'UI', 'Button' )
        playSound( 'OST', 'House Music' )
        dispatchEvent( 'update' )

    }

    const onAbout = () => {

        GAMEDATA.aboutMenuOpen = true

        playSound( 'UI', 'Button' )
        dispatchEvent( 'update' )

    }

    const onMainMenu = () => {

        GAMEDATA.aboutMenuOpen = false

        playSound( 'UI', 'Button' )
        dispatchEvent( 'update' )

    }

    useEffect( () => {

        window.addEventListener( 'update', () => setUpdate( Date.now() ) )

    }, [] )

    return (
        <div 
            className='MainMenu'
            style={ { display: display? 'inline-block' : 'none' } }>
            <div className='MainMenu-content'>
                <div 
                    className='MainMenu-page'
                    style={ { display: GAMEDATA.aboutMenuOpen ? 'none' : 'flex' } }>
                    <div className='MainMenu-title'>Tic-Tac-Toe!</div>
                    <div className='MainMenu-data'>Play with a friend!</div>
                    <div className='MainMenu-canvas'>
                        <MainMenuCanvas />
                    </div>
                    <button className='MainMenu-button' onClick={ () => onPlay() }>Play</button>
                    <button className='MainMenu-button disabled'>Settings</button>
                    <button className='MainMenu-button' onClick={ () => onAbout() }>About</button>
                    <div className='MainMenu-data'>Developed by Nikolas Karinja</div>
                    <div className='MainMenu-data'>WIP v{ VERSION }</div>
                </div>
                <div 
                    className='MainMenu-page'
                    style={ { display: GAMEDATA.aboutMenuOpen ? 'flex' : 'none' } }>
                    <div className='MainMenu-title'>About</div>
                    <div className='MainMenu-data'>@react-three/fiber</div>
                    <div className='MainMenu-data'>@react-three/drei</div>
                    <div className='MainMenu-data'>react</div>
                    <div className='MainMenu-data'>sass</div>
                    <br />
                    <div className='MainMenu-data'>A fun little game jam I came up with.</div>
                    <br />
                    <div className='MainMenu-data'>Started by Nikolas Karinja on April 23rd, 2023</div>
                    <br />
                    <button className='MainMenu-button' onClick={ () => onMainMenu() }>Back</button>
                </div>
            </div>
        </div>
    )

}

export default MainMenu
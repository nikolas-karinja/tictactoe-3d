import { useEffect, useState } from 'react'
import { GAMEDATA, GAMERULES, VERSION } from '../constants'
import '../sass/MainMenu.sass'
import { dispatchEvent, playSound, resetGame } from '../utils'
import MainMenuCanvas from './MainMenuCanvas'

const MainMenu = ( { display } ) => {

    const [ update, setUpdate ] = useState( Date.now() )
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false)

    const onPlay = (cpuPlayer = false) => {

        GAMEDATA.gameStarted = true
        GAMEDATA.mainMenuOpen = false
        GAMERULES.cpuPlayer = cpuPlayer

        resetGame()
        dispatchEvent("close main menu")

        playSound( 'UI', 'Button' )
        playSound( 'OST', 'House Music' )
        dispatchEvent( 'update' )

    }

    const onAbout = () => 
    {
        playSound( 'UI', 'Button' )
        dispatchEvent('open about menu')
    }

    const onMainMenu = () => 
    {
        playSound( 'UI', 'Button' )
        dispatchEvent('close about menu')
    }

    useEffect( () => 
    {
        window.addEventListener( 'update', () => setUpdate( Date.now() ) )
        window.addEventListener('open about menu', () => setAboutMenuOpen(true))
        window.addEventListener('close about menu', () => setAboutMenuOpen(false))
    }, [] )

    return (
        <div 
            className='MainMenu'
            style={ { display: display? 'inline-block' : 'none' } }>
            <div className='MainMenu-content'>
                <div 
                    className='MainMenu-page'
                    style={ { display: aboutMenuOpen ? 'none' : 'flex' } }>
                    <div className='MainMenu-title'>Tic-Tac-Toe!</div>
                    <div className='MainMenu-data'>Play with a friend or beat the computer!</div>
                    <div className='MainMenu-canvas'>
                        <MainMenuCanvas />
                    </div>
                    <button className='MainMenu-button' onClick={ () => onPlay(true) }>Play Solo</button>
                    <button className='MainMenu-button' onClick={ () => onPlay(false) }>Play Hotseat</button>
                    {/* <button className='MainMenu-button disabled'>Settings</button> */}
                    <button className='MainMenu-button' onClick={ () => onAbout() }>About</button>
                    <div className='MainMenu-data'>Developed by Nikolas Karinja</div>
                    <div className='MainMenu-data'>WIP v{ VERSION }</div>
                </div>
                <div 
                    className='MainMenu-page'
                    style={ { display: aboutMenuOpen ? 'flex' : 'none' } }>
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
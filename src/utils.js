import { AUDIO, EVENTS, GAMEDATA, GAMERULES } from './constants'

export function changePlayers () {

    if ( GAMEDATA.cpuTurn ) GAMEDATA.cpuTurn = false

    if ( checkBoardForWin() ) {

        GAMEDATA.gameFinished = true
        GAMEDATA.winner = GAMEDATA.player

        playSound( 'UI', 'Win' )

    } else {

        if ( checkBoardForDraw() ) {

            GAMEDATA.winner = 2
            GAMEDATA.gameFinished = true

            playSound( 'UI', 'Draw' )

        } else {

            setPlayer( GAMEDATA.player === 1 ? 0 : 1 )

            if ( GAMEDATA.player === 1 && GAMERULES.cpuPlayer ) {

                GAMEDATA.cpuTurn = true

                const rN = GAMEDATA.boardTilesAvailable[ Math.floor( Math.random() * GAMEDATA.boardTilesAvailable.length ) ]

                const c = Math.floor( rN / 3 )
                const cc = rN % 3

                if ( !GAMEDATA.mainMenuOpen ) setTimeout( () => placeShape( c, cc ), 500 )

            }

        }

    }

    dispatchEvent( 'update' )
}

export function checkBoardForWin () {

    const p = GAMEDATA.player
    const b = GAMEDATA.board

    let win = false

    // horizontal
    
    if ( b[ 0 ][ 0 ] === p && b[ 0 ][ 1 ] === p && b[ 0 ][ 2 ] === p ) win = true
    if ( b[ 1 ][ 0 ] === p && b[ 1 ][ 1 ] === p && b[ 1 ][ 2 ] === p ) win = true
    if ( b[ 2 ][ 0 ] === p && b[ 2 ][ 1 ] === p && b[ 2 ][ 2 ] === p ) win = true

    // vertical

    if ( b[ 0 ][ 0 ] === p && b[ 1 ][ 0 ] === p && b[ 2 ][ 0 ] === p ) win = true
    if ( b[ 0 ][ 1 ] === p && b[ 1 ][ 1 ] === p && b[ 2 ][ 1 ] === p ) win = true
    if ( b[ 0 ][ 2 ] === p && b[ 1 ][ 2 ] === p && b[ 2 ][ 2 ] === p ) win = true

    // diagonal

    if ( b[ 0 ][ 0 ] === p && b[ 1 ][ 1 ] === p && b[ 2 ][ 2 ] === p ) win = true
    if ( b[ 0 ][ 2 ] === p && b[ 1 ][ 1 ] === p && b[ 2 ][ 0 ] === p ) win = true

    return win

}

export function checkBoardForDraw () {

    let tilesMarked = 0

    for ( let y = 0; y < 3; y++ ) {

        for ( let x = 0; x < 3; x++ ) {

            if ( GAMEDATA.board[ y ][ x ] === 0 || GAMEDATA.board[ y ][ x ] === 1 ) tilesMarked++

        }

    }

    return tilesMarked >= 9 ? true : false 

}

export function createAudioChannels () {

    AUDIO.createChannel( 'OST' )
    AUDIO.createChannel( 'SFX' )
    AUDIO.createChannel( 'UI' )

}

export function createEvent ( name ) {

    EVENTS[ name ] = new Event( name )

}

export function dispatchEvent ( name ) {

    window.dispatchEvent( EVENTS[ name ] )

}

export function loadAudio ( ...args ) {

    AUDIO.load( ...args )

}

export function mainMenu () {

    GAMEDATA.mainMenuOpen = true
    
    resetGame()

    GAMEDATA.gameStarted = false

    dispatchEvent('open main menu')
}

export function placeShape ( c, cc ) {

    GAMEDATA.board[ c ][ cc ] = GAMEDATA.player

    const index = GAMEDATA.boardTilesAvailable.indexOf( ( c * 3 ) + cc )

    if ( index > -1 ) {

        GAMEDATA.boardTilesAvailable.splice( index, 1 )

    }

    playSound( 'SFX', 'Place' )
    dispatchEvent( 'update' )
    changePlayers()

}

export function playSound ( channelName, soundName ) {

    AUDIO.playSound( channelName, soundName )

}

export function resetBoard () {

    for ( let y = 0; y < 3; y++ ) {

        for ( let x = 0; x < 3; x++ ) {

            GAMEDATA.board[ y ][ x ] = 2
        
        }

    }

    GAMEDATA.boardTilesAvailable = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

}

export function resetGame () {
    
    resetBoard()

    GAMEDATA.winner = 2
    GAMEDATA.gameFinished = false

    changePlayers()

}

export function setPlayer ( number ) {

    GAMEDATA.player = number

}

export function stopSound ( soundName ) {

    AUDIO.stopSound( soundName )

}
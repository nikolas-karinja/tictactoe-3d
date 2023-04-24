import { GAMEDATA } from './constants'

const Events = {}

export function changePlayers () {

    if ( checkBoardForWin() ) {

        GAMEDATA.gameFinished = true
        GAMEDATA.winner = GAMEDATA.player

    } else {

        if ( checkBoardForDraw() ) {

            GAMEDATA.winner = 2
            GAMEDATA.gameFinished = true

        } else {

            setPlayer( GAMEDATA.player === 1 ? 0 : 1 )

        }

    }

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

export function createEvent ( name ) {

    Events[ name ] = new Event( name )

}

export function dispatchEvent ( name ) {

    window.dispatchEvent( Events[ name ] )

}

export function setPlayer ( number ) {

    GAMEDATA.player = number

}

export function resetBoard () {

    for ( let y = 0; y < 3; y++ ) {

        for ( let x = 0; x < 3; x++ ) {

            GAMEDATA.board[ y ][ x ] = 2
        
        }

    }

}

export function resetGame () {
    
    resetBoard()
    setPlayer( GAMEDATA.winner === 2 ? Math.round( Math.random() ) : GAMEDATA.winner === 0 ? 1 : 0 )

    GAMEDATA.winner = 2
    GAMEDATA.gameFinished = false

}
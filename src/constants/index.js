import { AudioMixer } from '@little-island/audio'

export const VERSION = '0.4.1'

export const EVENTS = {}
export const AUDIO = new AudioMixer()

export const BOARD = {
    positions: [
        [ -1, -1 ],
        [ 0, -1 ],
        [ 1, -1 ],
        [ -1, 0 ],
        [ 0, 0 ],
        [ 1, 0 ],
        [ -1, 1 ],
        [ 0, 1 ],
        [ 1, 1 ],
    ]
}

export const GAMERULES = {
    cpuPlayer: false,
    maxTurnTimeAllowed: 5, // seconds allowed for each player's turn
    playerToStart: "X", // 0 is X, 1 is O
    turnTimeLimit: true, // if there should be a time limit for each player's turn
    difficulty: "Hard"
}

export const GAMEDATA = {
    aboutMenuOpen: false,
    cpuTurn: false,
    currentTurnTime: GAMERULES.maxTurnTimeAllowed,
    gameFinished: false,
    gameStarted: false,
    mainMenuOpen: true,
    meshesO: [],
    meshesX: [],
    player: GAMERULES.playerToStart,
    winner: null,
    boardTilesAvailable: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], 

    board: [
        null, null, null, 
        null, null, null,
        null, null, null,
    ],
}

export const sounds = [
    { name: 'House Music', url: './audio/ost/house.mp3', options: { loop: true } },

    { name: 'Place', url: './audio/sfx/place.mp3' },

    { name: 'Button', url: './audio/ui/button.mp3' },
    { name: 'Draw', url: './audio/ui/draw.mp3' },
    { name: 'Win', url: './audio/ui/win.mp3' },
    { name: 'Lose', url: './audio/ui/lose.mp3' },
    { name: 'Difficulty', url: './audio/ui/difficulty.mp3' },
]
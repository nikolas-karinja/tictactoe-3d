import { AudioMixer } from '@little-island/audio'

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
    cpuPlayer: true,
    maxTurnTimeAllowed: 5, // seconds allowed for each player's turn
    playerToStart: 0, // 0 is X, 1 is O
    turnTimeLimit: true, // if there should be a time limit for each player's turn
}

export const GAMEDATA = {
    aboutMenuOpen: false,
    cpuTurn: false,
    currentTurnTime: GAMERULES.maxTurnTimeAllowed,
    gameFinished: false,
    gameStarted: false,
    meshesO: [],
    meshesX: [],
    player: GAMERULES.playerToStart, // 0 is X, 1 is O
    winner: 2, // 0 = X, 1 = O, 2 = none
    boardTilesAvailable: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], 

    board: [ // 0 = X, 1 = O, 2 = none
        [ 2, 2, 2 ],
        [ 2, 2, 2 ],
        [ 2, 2, 2 ],
    ],
}

export const sounds = [
    { name: 'House Music', url: './audio/ost/house.mp3', options: { loop: true } },

    { name: 'Place', url: './audio/sfx/place.mp3' },

    { name: 'Button', url: './audio/ui/button.mp3' },
    { name: 'Draw', url: './audio/ui/draw.mp3' },
    { name: 'Win', url: './audio/ui/win.mp3' },
]
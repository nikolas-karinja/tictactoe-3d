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
    maxTurnTimeAllowed: 5, // seconds allowed for each player's turn
    playerToStart: 0, // 0 is X, 1 is O
    turnTimeLimit: true, // if there should be a time limit for each player's turn
}

export const GAMEDATA = {
    gameStarted: false,
    currentTurnTime: GAMERULES.maxTurnTimeAllowed,
    gameFinished: false,
    meshesO: [],
    meshesX: [],
    player: GAMERULES.playerToStart, // 0 is X, 1 is O
    winner: 2, // 0 = X, 1 = O, 2 = none

    board: [ // 0 = X, 1 = O, 2 = none
        [ 2, 2, 2 ],
        [ 2, 2, 2 ],
        [ 2, 2, 2 ],
    ],
}
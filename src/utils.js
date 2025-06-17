import { AUDIO, EVENTS, GAMEDATA, GAMERULES } from './constants'

export const aiMove = () =>
{
    let move = Math.random() > 0.75 ? getRandomMove() : getBestMove()

    // switch (this.difficulty) {
    //         case 'easy':
    //             move = this.getRandomMove();
    //             break;
    //         case 'medium':
    //             move = Math.random() > 0.5 ? this.getBestMove() : this.getRandomMove();
    //             break;
    //         case 'hard':
    //             move = this.getBestMove();
    //             break;
    //     }
        
    setTimeout(() => makeMove(move, "O"), 500);
}

export const makeMove = (index, player) => 
{
        GAMEDATA.board[index] = player;

        playSound( 'SFX', 'Place' )

        const winner = checkWinner();
        if (winner) {
            endGame(winner);
            return;
        }
        if (!GAMEDATA.board.includes(null)) {
            endGame('draw');
            return;
        }

        GAMEDATA.player = GAMEDATA.player === 'X' ? 'O' : 'X';
        dispatchEvent( 'update' )

        if (GAMEDATA.player === "O" && GAMERULES.cpuPlayer) {
            aiMove();
        }
    }

export const getRandomMove = () => 
{
    const available = GAMEDATA.board.reduce((acc, val, idx) => 
            val === null ? [...acc, idx] : acc, []);
        return available[Math.floor(Math.random() * available.length)];
}

export const getBestMove = () =>
{
    let bestScore = -Infinity;
    let move;
    const _board = GAMEDATA.board

    for (let i = 0; i < 9; i++) 
    {
        if (_board[i] === null) 
        {
            _board[i] = "O";
            const score = minimax(_board, 0, false);
            _board[i] = null;

            if (score > bestScore) 
            {
                bestScore = score;
                move = i;
            }
        }
    }

    return move
}

export function checkWinner () 
{
    const _board = GAMEDATA.board

    const wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

    for (const [a, b, c] of wins) {
        if (_board[a] && _board[a] === _board[b] && _board[a] === _board[c]) {
            return _board[a];
        }
    }

    return null
}

export const minimax = (board, depth, isMaximizing) => 
{
        const winner = checkWinner();

        if (winner === 'O') return 10 - depth;
        if (winner === 'X') return -10 + depth;
        if (!board.includes(null)) return 0;

        if (isMaximizing) 
        {
            let bestScore = -Infinity;

            for (let i = 0; i < 9; i++) 
            {
                if (board[i] === null) 
                {
                    board[i] = "O";
                    const score = minimax(board, depth + 1, false);
                    board[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }

            return bestScore;
        } 
        else 
        {
            let bestScore = Infinity;

            for (let i = 0; i < 9; i++) 
            {
                if (board[i] === null) 
                {
                    board[i] = "X";
                    const score = minimax(board, depth + 1, true);
                    board[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            
            return bestScore;
        }
    }

export const endGame = (result) => 
{
        GAMEDATA.gameFinished = true;

        if (result === 'X') {
            GAMEDATA.winner = "X"
            playSound( 'UI', 'Win' )
        } else if (result === 'O') {
            GAMEDATA.winner = "O"
            
            if (GAMERULES.cpuPlayer)
                playSound( 'UI', 'Lose' )
            else
                playSound( 'UI', 'Win' )
        } else {
            GAMEDATA.winner = null

            playSound( 'UI', 'Draw' )
        }

        dispatchEvent("update")
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

export function playSound ( channelName, soundName ) {

    AUDIO.playSound( channelName, soundName )

}

export function resetBoard () {

    GAMEDATA.board = Array(9).fill(null);

}

export function resetGame () {
    
    resetBoard()

    GAMEDATA.winner = null
    GAMEDATA.gameFinished = false
    GAMEDATA.player = "X"
}

export function setPlayer ( number ) {

    GAMEDATA.player = number

}

export function stopSound ( soundName ) {

    AUDIO.stopSound( soundName )

}
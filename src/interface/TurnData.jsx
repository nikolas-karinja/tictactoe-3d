import '../sass/TurnData.sass'
import PlayerShapeCanvas from './PlayerShapeCanvas'
import PlayerTypeCanvas from './PlayerTypeCanvas'
import { GAMEDATA } from '../constants'

const TurnData = ( { display } ) => {

    return (
        <div 
            className='TurnData' 
            style={ { display: display ? 'flex' : 'none' } }>
            <div className='TurnData-playerType'>
                <PlayerTypeCanvas />
            </div>
            <div className='TurnData-playerShape'>
                <PlayerShapeCanvas player={ GAMEDATA.player } />
            </div>
        </div>
    )

}

export default TurnData
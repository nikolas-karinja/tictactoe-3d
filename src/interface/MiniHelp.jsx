import { useEffect, useState } from 'react'
import '../sass/MiniHelp.sass'
import { GAMEDATA } from '../constants'

const MiniHelp = ( { display } ) => 
{
    const [text, setText] = useState("Yaya!")

    useEffect(() =>
    {
        window.addEventListener('update', () =>
        {
            if (GAMEDATA.cpuTurn)
                setText("Computer deciding...")
            else
                setText("Tap on the tiles!")
        })
    }, [])

    return <div className='MiniHelp' style={ { display: display ? 'inline-block' : 'none' } }>{text}</div>

}

export default MiniHelp
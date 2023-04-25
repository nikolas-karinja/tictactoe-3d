import '../sass/MiniHelp.sass'

const MiniHelp = ( { display } ) => {

    return <div className='MiniHelp' style={ { display: display ? 'inline-block' : 'none' } }>Tap on the tiles!</div>

}

export default MiniHelp
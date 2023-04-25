import '../sass/AppData.sass'

const AppData = ( { display } ) => {

    return (
        <div 
            className='AppData'
            style={ { display: display ? 'flex' : 'none' } }>
            <div>A fun little experiment</div>
            <div>Developed by Nikolas Karinja - 2023</div>
        </div>
    )

}

export default AppData
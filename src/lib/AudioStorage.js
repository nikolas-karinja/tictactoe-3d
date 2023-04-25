import { Sound } from './Sound'

export class AudioStorage {

    constructor () {

        this.Sounds = {}

    }

    add ( name, fileUrl, options = {} ) {

        this.Sounds[ name ] = new Sound( fileUrl, options )

    }

    find ( name ) {

        return this.Sounds[ name ]

    }

}
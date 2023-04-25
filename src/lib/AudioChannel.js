export class AudioChannel {

    constructor ( volume = 1 ) {

        this.volume = volume

    }

    getVolume () {

        return this.volume

    }

    setVolume ( value ) {

        this.volume = value

    }

}
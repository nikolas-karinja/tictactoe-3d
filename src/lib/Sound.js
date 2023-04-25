export class Sound {

    constructor ( fileUrl, options = {} ) {

        this.initialVolume = options.volume ? options.volume : 1
        this.initialLoop = options.loop ? options.loop : false
        this.playing       = false

        this.Audio = new Audio( fileUrl )
        this.Audio.loop = this.initialLoop

    }

    getInitialVolume () {

        return this.initialVolume

    }

    getVolume () {

        return this.Audio.volume

    }

    isPlaying () {

        return this.playing

    }

    play () {

        this.Audio.pause()
        this.Audio.currentTime = 0
        this.Audio.play()

        this.playing = true

    }

    resetVolume () {

        this.Audio.volume = this.getInitialVolume()

    }

    setVolume ( value ) {

        this.Audio.volume = value

    }

    stop () {

        this.Audio.pause()
        this.Audio.currentTime = 0

        this.resetVolume()

        this.playing = false

    }

}
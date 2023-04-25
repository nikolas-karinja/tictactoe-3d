import { AudioChannel } from './AudioChannel'
import { AudioStorage } from './AudioStorage'

export class AudioMixer {

    constructor () {

        this.Storage = new AudioStorage()

        this.Channels = {
            Master: new AudioChannel(),
        }

    }

    createChannel ( name, volume = 1 ) {

        this.Channels[ name ] = new AudioChannel( volume )

    }

    load () {

        for ( let i of arguments ) {

            this.Storage.add( i.name, i.url, i.options ? i.options : {} )

        }

    }
    
    playSound ( channelName, name ) {

        const masterVolume  = this.Channels.Master.getVolume()
        const channelVolume = channelName !== 'Master' ? this.Channels[ channelName ].getVolume() * masterVolume : masterVolume

        const Sound = this.Storage.find( name )

        Sound.setVolume( Sound.getInitialVolume() * channelVolume )
        Sound.play()

    }

    setChannelVolume ( channelName, value ) {

        this.Channels[ channelName ].setVolume( value )

    }

    stopSound ( name ) {

        const Sound = this.Storage.find( name )
        Sound.stop()

    }

}
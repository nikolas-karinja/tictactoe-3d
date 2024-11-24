import './sass/index.sass'
import App from './interface/App'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createAudioChannels, createEvent, loadAudio } from './utils'
import { sounds } from './constants'

createAudioChannels()
loadAudio( ...sounds )
createEvent('update')
createEvent('open about menu')
createEvent('close about menu')
createEvent('open main menu')
createEvent('close main menu')

const ROOT = ReactDOM.createRoot( document.getElementById( 'root' ) )
ROOT.render( <App /> )
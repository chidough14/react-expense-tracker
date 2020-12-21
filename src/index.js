import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import App from './App'
import './index.css'
import {Provider} from './context/context'

ReactDOM.render(
    <SpeechProvider appId="0aba750c-4037-4fef-b244-1ebed43ea9b6" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root'))
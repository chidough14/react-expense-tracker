import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import App from './App'
import './index.css'
import {Provider} from './context/context'

ReactDOM.render(
    <SpeechProvider appId="d350910e-fd46-4d0b-b9ef-6486d5724e75" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root'))
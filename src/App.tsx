import React, {memo} from 'react'
import './App.css'
import {Counter} from './components/counter/Counter'
import {Settings} from './components/settings/Settings'

export const App = memo(() => <div className="app">
    <Settings/>
    <Counter/>
</div>)
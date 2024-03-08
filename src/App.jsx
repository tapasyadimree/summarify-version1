import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css'

const App = () => {
  return (
    <main>
        {/*this div is giving that gradient to my app */}
        <div className="main">
            <div className="gradient"></div>
        </div>
        {/* app class will contain all the contents of app */}
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App
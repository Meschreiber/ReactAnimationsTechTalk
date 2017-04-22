import React, { Component } from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import HairTutorial from './HairTutorial'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Hero />
                    <HairTutorial />
                </div>
            </div>
        )
    }
}

export default App
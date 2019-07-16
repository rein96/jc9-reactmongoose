import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Home from './Home'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
            </BrowserRouter>
        )
    }
}

export default App
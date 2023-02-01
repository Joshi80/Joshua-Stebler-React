import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Kontakt from './views/kontakt'
import Home from './views/home'
import About from './views/about'
import Portfolio from './views/portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Kontakt} exact path="/kontakt" />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Portfolio} exact path="/portfolio" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

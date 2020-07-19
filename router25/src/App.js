import React, { Component } from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Navbar/>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/:post_id' component={Post}/>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

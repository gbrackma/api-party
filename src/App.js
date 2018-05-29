import React, { Component } from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className='navLink'>
          <li>
            <NavLink to="/github"> Github API </NavLink>
          </li>
          <li>
            <NavLink to="/nasa"> NASA API </NavLink>
          </li>
          <li>
            <NavLink to="/homework"> Homework </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" render={() => <h1>Githib!</h1>}/>
          <Route path="/nasa" render={() => <h1>Nasa!</h1>}/>
          <Route path="/homework" render={() => <h1>Homework!</h1>}/>
          <Route render={() => <h1>click a link to get started!</h1>}/>
        </Switch>
      </div>
    )
  }
}
export default App;
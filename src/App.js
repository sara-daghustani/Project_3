import React, { Component } from 'react'
import './App.css';
import EventList from './EventList'
import { Register } from './login/register'
import { Login } from "./login/login";
import "./login/style.css";
import EventCard from './EventCard'
import Newpost from './Newpost';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';


class App extends Component {
  state = {

    events: []
 
  }
  render() {
    // return (
    //   <BrowserRouter>
    //     <Route path="/" exact component={Msg} />
    return (

<div>
      <BrowserRouter>

        <div>
          <nav className="sections">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/new-post" >New Event</NavLink></li>
              <li><NavLink to="/login/register" >Register</NavLink></li>
              <li><NavLink to="/login/login" >Log in</NavLink></li>
            </ul>
          </nav>
       
          <Switch>
            <Route exact path="/new-post" component={Newpost} />
            <Route path="/login/register" component={Register} />
            <Route path="/login/login" component={Login} />


            <Route
              path="/" exact
              render={(routeProps) => (
                <EventCard {...routeProps} events={this.state.events.events} />
              )}
            />

          </Switch>


        </div>


      </BrowserRouter>
</div>

    )
  }
}


export default App;

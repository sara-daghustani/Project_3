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
    events: [
      { id: "1", title: "Organizing", date: "13/12/2019", location: "Riyadh", volunteers: "5" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "1", title: "Organizing", date: "13/12/2019", location: "Riyadh", volunteers: "5" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
    ]
  }
  render() {
    return (
      <div>
            <BrowserRouter>
              <div>
                <nav className="sections">
                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new-post" >New Event</NavLink></li>
                    <li><NavLink to="/login/register">Register</NavLink></li>
                    <li><NavLink to="/login/login">Log in</NavLink></li>
                  </ul>
                </nav>
            
                <Switch>
                    <Route exact path="/new-post" component={Newpost} />
                    <Route path="/login/register" component={Register} />
                    <Route path="/login/login" component={Login} />
                    <Route
                      path="/" exact
                      render={(routeProps) => (
                        <EventCard {...routeProps} events={this.state.events} />
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

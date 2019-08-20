// import React from 'react';
import React, { Component } from 'react'
import './App.css';
import EventE from './Events'
import HomePage from './HomePage';
import Login from './login/login'
// import Register from './login/register'
import Volunteer from './login/Volunteer'
import Organization from './login/Organization'
import {Register} from './login/index'

// import EventCard from './EventCard';
import Newpost from './Newpost';
// import logo from './logo.jpg'
import Events from './Events';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const Msg = () => {
  return (<h1>Hi</h1>)
}

class App extends Component {

  state = {
    events: [
      { id: "1", title: "Organizing", date: "13/12/2019", location: "Riyadh", volunteers: "5" },
      { id: "2", title: "Dance", date: "13/12/2019", location: "Jeddah", volunteers: "1" },
      { id: "3", title: "School", date: "13/12/2019", location: "Dammam", volunteers: "3" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
    ]
  }
  render() {
    // return (
    //   <BrowserRouter>
    //     <Route path="/" exact component={Msg} />
    //     <Route path="/new-post" component={Newpost}/>

    //     <li><NavLink to="/" exact>Home</NavLink></li>
    //     <li><NavLink to="/new-post">New Event</NavLink></li>
    //   </BrowserRouter>
    // )
    return (
      <BrowserRouter>


        <HomePage />
        <div className="App">

          <p className="Events_content">
            {this.state.events.map((event) => {
              return <EventE
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
              />

            })}
          </p>
          
<index/>

        </div>
        {/* <Organization/>
        <Volunteer/> */}

      </BrowserRouter>

    )
  }
}


export default App;

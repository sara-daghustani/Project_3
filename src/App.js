import React, { Component } from 'react'
import './App.css';
import EventE from './Events'
// import NotFoundPage from './404.jsx'
import EventList from './EventList'
import { Register } from './login/register'
import {Login} from "./login/login";
import "./login/style.css";


// import EventCard from './EventCard';
import Newpost from './Newpost';
// import logo from './logo.jpg'
import Events from './Events';

import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

// const Msg = () => {
//   return (<h1>Hi</h1>)
// }

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
    return (


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
          <header>
            <div className="container h-100">
              {/* <img src={logo} alt="logo" /> */}
              <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                  <h1 className="display-4 text-white mt-5 mb-2"></h1>
                  <p className="lead mb-5 text-white-50"></p>
                </div>
              </div>
            </div>
          </header>
          <Switch>
          <Route exact path="/new-post" component={Newpost} />
          <Route path="/login/register" component={Register} />
          <Route path="/login/login" component={Login} />
          {/* {Login} from "./login"; */}
          {/* <Route path="/" exact component={EventList} /> */}

          <Route
  path="/" exact
  render={(routeProps) => (
    <EventList {...routeProps} events={this.state.events} />
  )}
/>

          {/* <React exact path='/404'component={NotFoundPage} />
          <Redirect to= '/404'/> */}
          </Switch>
        

        </div>

        {/* <HomePage /> */}
        <div className="App">
{/* <EventList events={this.state.events} /> */}
         

          {/* <index/> */}

        </div>
        {/* <Organization/>
        <Volunteer/> */}

      </BrowserRouter>

    )
  }
}


export default App;

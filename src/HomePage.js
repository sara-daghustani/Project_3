import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
//   } from 'react-router-dom';
import './HomePage.css';
// import EventCard from './EventCard'
import Newpost from './Newpost'
import Events from './Events';
// import logo from './logo.jpg'

class HomePage extends Component {
    render() {
        return (
            <div>
                <nav className="sections">
                    <ul>
                        <li><NavLink to="/"exact>Home</NavLink></li>
                        <li><NavLink to="/new-post">New Event</NavLink></li>
                    </ul>
                </nav>
                <Route path="/" exact Component={Events} />
                <Route path="/new-post" Component={Newpost}/>

                <header>
                    <div class="container h-100">
                        {/* <img src={logo} alt="logo" /> */}
                        <div class="row h-100 align-items-center">
                            <div class="col-lg-12">
                                <h1 class="display-4 text-white mt-5 mb-2">Business Name or Tagline</h1>
                                <p class="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './HomePage.css';
import NewEvent from './NewEvent'
class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                {/* <header className="#f3e5f5 purple lighten-5">
                            <h1><NavLink to="/" exact>Eventy</NavLink></h1>
                        
                </header> */}


                {/* <Route path="NewEvent" exact component={NewEvent} /> */}

                {/* <Route path="/new-post" component={NewPost} /> */}
            </div>
        );
    }
}

export default HomePage;
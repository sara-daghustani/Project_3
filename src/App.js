// import React from 'react';
import React, { Component } from 'react'
import './App.css';
import EventE from './components/EventE'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import logo from './logo.jpg'



class App extends Component {

  state = {
    events: [
      { id: "1", title: "Organizing", date: "13/12/2019", location: "Riyadh", volunteers: "5" },
      { id: "2", title: "Dance", date: "13/12/2019", location: "Jeddah", volunteers: "1" },
      { id: "3", title: "School", date: "13/12/2019", location: "Dammam", volunteers: "3" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "3", title: "School", date: "13/12/2019", location: "Dammam", volunteers: "3" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
      { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
    ]
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <i class="navbar-brand">Eventy</i>
                </nav>
                <header class="bg-primary py-5 mb-5">
                    <div class="container h-100">
                        <img src={logo} alt="logo" />
                        <div class="row h-100 align-items-center">
                            <div class="col-lg-12">
                                <h1 class="display-4 text-white mt-5 mb-2">Business Name or Tagline</h1>
                                <p class="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
                            </div>
                        </div>
                    </div>
                </header>
        {/* <HomePage/> */}
       <p className="Events">
        {this.state.events.map((event) => {
          return <EventE
            title={event.title}
            date={event.date}
            location={event.location}
            volunteers={event.volunteers}
          />
        })}
        </p>

      </div>
      </BrowserRouter>
    )
  }
}


export default App;

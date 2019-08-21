import React, { Component } from 'react'
import './Event.css'
import {
  Link
} from 'react-router-dom';
import EventName from './EventName';
import Events from './Events';

export class EventList extends Component {

  change = () => {
    this.props.change(this.props.id)
    // this.props.enter()
  }
  render() {
    return (
      <div className="App">

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
                 <p className="Events_content">
            {this.props.events.map((event, index) => {
              return <Events
              key={index}
              image={event.image}
                title={event.eventName}
                date={event.startDate}
                location={event.eventLocation}
                volunteers={event.numberOfVolunteer}
                getEvent={()=>this.props.getOneEvent(event.id)}  
                change={()=>this.props.change(event.id)}
              />

            })}
          </p>

          </div>
    )
  }
}

export default EventList

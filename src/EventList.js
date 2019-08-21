import React, { Component } from 'react'
import './Event.css'
import {
    Link
  } from 'react-router-dom';
  import EventName from './EventName';


export class EventList extends Component {

    change = ()=> {
        this.props.change(this.props.id)
        // this.props.enter()
    }
    render() {
        return (
            
        // <div className="EventE">
                  <div className='containerr'>
        <div className='roww'>
          <div className='col-10 mx-auto col-md-6 my-3'>
              
            <svg src={this.props.image} class="bd-placeholder-img card-img-top" width="90%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="90%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{this.props.name}</text></svg>
            <small><strong>Start at :</strong> { this.props.sDate} _ <strong>In :</strong> {this.props.city}</small>
            <small><strong>End at :</strong> { this.props.eDate } <strong> Require :</strong> {this.props.volntNum} <strong>Volunteer/s</strong></small> 
                <p> <strong>Event: </strong>{this.props.gender}</p>
                <p> <strong>Targeted Category: </strong>{this.props.vuCategory}</p>
                <p> <strong>Event Interest: </strong>{this.props.eveInterest}</p>
                {/* <p> <strong>Image:  </strong></p> */}
                <button type='button' onClick={this.change} >Go To Event</button>
                {/* <a href="/test" className='btn btn-warning mb-5 text-capitalize'>Go To Event</a> */}
                </div>

            </div>
        </div>
            
        )
    }
}

export default EventList

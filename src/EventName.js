import React, { Component } from 'react'

class EventName extends Component {

state = {
  event : this.props.events[this.props.id-1]
}
    render() {

console.log(this.state.event);


        return (
        <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>

            <button type='button'  onClick={this.props.back} class="btn btn-info">back to event list</button> {}
            <button type='button' onClick={this.props.getEvent} class="btn btn-info">Go To Event</button>
            <p/>
            <img src={this.state.event.image} className='d-block w-100' alt='event'/>
         
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
      
            <h6 className='text-uppercase'>{this.state.event.eventName}</h6>
            <h6 className='text-warning text-capitalize text-slanted'>Provided by</h6>

            {/* <a href='' target='_blank' className='btn btn-primary mt-2 mx-3 text-capitalize'>Organization Webpage</a> */}
            {/* <a href='' target='_blank' className='btn btn-success mt-2 mx-3 text-capitalize'>Organization Webpage</a> */}

            <ul className='list-group mt-4' >
            <h3 className='mt-3 mb-4'>Event Details </h3> 
            {/* <li className='list-group-item text-slanted'>Event Start Date : {this.state.event.startDate} </li>  */}
            {/* <li className='list-group-item text-slanted'>Event City {this.state.event.eventName}</li> */}
            {/* <li className='list-group-item text-slanted'>Event Date</li> */}

            <li className='list-group-item text-slanted'>Start:  { this.state.event.startDate} End: {this.state.event.endDate}</li> 
            <li className='list-group-item text-slanted'> City - { this.state.event.eventLocation}</li>
            <li className='list-group-item text-slanted'> Interest - { this.state.event.eventCategory}</li>
            <li className='list-group-item text-slanted'>Volunteer Category - {this.state.event.volunteerCategory}</li>
            <li className='list-group-item text-slanted'>Volunteer Number - {this.state.event.numberOfVolunteer}</li>
            <li className='list-group-item text-slanted'>Volunteer Gender - {this.state.event.conditions}</li>
            <li className='list-group-item text-slanted'>About The Event - {this.state.event.summary}</li>

            </ul>
          </div>
        </div>
      </div>
        )
    }
}

export default EventName

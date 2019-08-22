import React, { Component } from 'react'

class EventName extends Component {

  state = {
    event: this.props.events[this.props.id - 1]
  }
  render() {

    console.log(this.state.event);


    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>

            <button type='button'  onClick={this.props.back} class="btn btn-info">back to event list</button> {}
            <p/>
            <img src={this.state.event.image} className='d-block w-100' alt='event'/>
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>

            <h6 className='text-uppercase'>{this.state.event.eventName}</h6>
            <h6 className='text-warning text-capitalize text-slanted'>Provided by</h6>
            <ul className='list-group mt-4' >
              <h3 className='mt-3 mb-4'>Event Details </h3>



              <li className='list-group-item text-slanted'><strong>Start: </strong>  {this.state.event.startDate} End: {this.state.event.endDate}</li>
              <li className='list-group-item text-slanted'> <strong> City: </strong> {this.state.event.eventLocation}</li>
              <li className='list-group-item text-slanted'> <strong> Interest: </strong> {this.state.event.eventCategory}</li>
              <li className='list-group-item text-slanted'><strong> Volunteer Gender: </strong> {this.state.event.volunteerCategory}</li>
              <li className='list-group-item text-slanted'> <strong> Volunteer Number: </strong>  {this.state.event.numberOfVolunteer}</li>
              <li className='list-group-item text-slanted'><strong> Volunteer Category: </strong> {this.state.event.conditions}</li>
              <li className='list-group-item text-slanted'><strong> About The Event: </strong> {this.state.event.summary}</li>


            </ul>
            <p></p>
            <button type='button' onClick={this.props.back} class="btn btn-info">back to event list</button> {}
            <button type='button'  class="btn btn-info">Contact Info</button> {}

          </div>
        </div>
      </div>
    )
  }
}

export default EventName

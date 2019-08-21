// import React, { Component } from 'react'
import React, { Component } from 'react'
import axios from 'axios'
import EventName from './EventName';
import EventList from './EventList';


class EventCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      events: [],
      i: 0,
      id :0, 

    }
  }

  getOneEvent(id){
    axios.get(`https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events/${id}.json`)
    .then(res => {
        console.log(res.data);
        this.setState({events: [res.data]})
         
    })
    .catch(err => {
        console.log(err)
    })
  }
  
  componentDidMount() {
    
    axios.get('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json')
    .then(res => {
        console.log(res.data);
        this.setState({events: res.data})
         
    })
    .catch(err => {
        console.log(err)
    })
}
change =(num)=>{
  this.setState({
    i : 1 ,
    id : num
  })
}
back = ()=>{
  this.setState({
    i : 0 ,
   
  })
}
  render() {
    let api = this.state.events.map((event, index) => {

      // return <EventName getEvent={()=>this.getOneEvent(event.id)} getList={()=>this.componentDidMount()} key={index} name={event.eventName} sDate={event.startDate} img={event.image}/>
      return <EventList  key={index} id={event.id} name={event.eventName} sDate={event.startDate} city={event.eventLocation} img={event.image} volnt={event.numberOfVolunteer}  getEvent={()=>this.getOneEvent(event.id)}  change = {this.change}/>
      
    })
    let api2 =  <EventName getEvent={()=>this.getOneEvent()} id={this.state.id} getList={()=>this.componentDidMount()}  events={this.state.events} back ={this.back} />
    // sDate={this.state.events.startDate} img={this.state.events.image}
var s = [api , api2]
    return (
      <>
      {s[this.state.i]}
      </>
      /* <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>

            <button type='button' className='btn btn-warning mb-5 text-capitalize'>back to this.state.events list</button>
            <img src='https://www.rd.com/wp-content/uploads/2018/05/shutterstock_464300804.jpg' className='d-block w-100' alt='event'/>
         
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
      
            <h6 className='text-uppercase'>event name</h6>
            <h6 className='text-warning text-capitalize text-slanted'>Provided by</h6>

            <a href='' target='_blank' className='btn btn-primary mt-2 text-capitalize'>Organization Webpage</a>
            <a href='' target='_blank' className='btn btn-success mt-2 text-capitalize'>Organization Webpage</a>

            <ul className='list-group mt-4' >
            <h3 className='mt-3 mb-4'>Event Details</h3> 
            <li className='list-group-item text-slanted'>Event Name</li> 
            <li className='list-group-item text-slanted'>Event City</li>
            <li className='list-group-item text-slanted'>Event Category</li>
            <li className='list-group-item text-slanted'>Event Date</li>

            </ul>
          </div>
        </div>
      </div>
      <div> 
        
        /* {
        this.state.events.length ?
        this.state.events.map(event => <div key={event.id}>{event.eventName}</div>) :
        null
        }
      </div> */
      
    )
  }
}

export default EventCard



// import './EventCard'

// class EventCard extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             url: `https://www.food2fork.com/api/search?key=6f4d7e142e39297171a1afdb79306899&q=chicken%20breast&page=2`
//         }
//     }

//     render() {
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-10 mx-auto col-md-6 my-3'>


//                         <img src='https://www.rd.com/wp-content/uploads/2018/05/shutterstock_464300804.jpg' className='d-block w-100' alt='event' />

//                     </div>
//                     <div className='col-10 mx-auto col-md-6 my-3'>

//                         <h6 className='text-uppercase'>event name</h6>
//                         <h6 className='text-warning text-capitalize text-slanted'>Provided by</h6>

//                         {/* <a href='' target='_blank' className='btn btn-success mt-2 text-capitalize'>Organization Webpage</a> */}

//                         <ul className='list-group mt-4' >
//                             <h3 className='mt-3 mb-4'>Event Details</h3>
//                             <li className='list-group-item text-slanted'>Event Name</li>
//                             <li className='list-group-item text-slanted'>Event City</li>
//                             <li className='list-group-item text-slanted'>Event Category</li>
//                             <li className='list-group-item text-slanted'>Event Date</li>
//                         </ul>
//                         <div className="volunteer">
//                             <a href='' target='_blank' className='btn btn-primary mt-2 text-capitalize'>Organization Webpage</a>
//                         </div>
//                     </div>
//                 </div>
//                 <button type='button' className='btn btn-warning mb-5 text-capitalize'>back to event list</button>
//             </div>
//         )
//     }
// }

// export default EventCard
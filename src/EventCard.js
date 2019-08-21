// import React, { Component } from 'react'
import React, { Component } from 'react'
import axios from 'axios'
import EventName from './EventName';
import EventList from './EventList';
import './Events.css'


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
      return <EventList  key={index} vuCategory={event.volunteerCategory} eveInterest={event.eventCategory} gender={event.conditions} name={event.eventName} sDate={event.startDate} eDate={event.endDate} city={event.eventLocation} img={event.image} volntNum={event.numberOfVolunteer}  getEvent={()=>this.getOneEvent(event.id)}  change = {this.change}/>
      
    })
    let api2 =  <EventName getEvent={()=>this.getOneEvent()} id={this.state.id} getList={()=>this.componentDidMount()}  events={this.state.events} back ={this.back} />
    // sDate={this.state.events.startDate} img={this.state.events.image}
var s = [api , api2]
    return (
      <>
 

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
      {s[this.state.i]}
      </>

      
    )
  }
}

export default EventCard



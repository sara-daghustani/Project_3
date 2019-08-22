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

  // let deletePostHandler = () => {
  //   axios.delete('/posts/' + this.state.id)
  //       .then(response => {
  //           console.log(response);
  //       });
// }
}
  render() {
      

    let api = <EventList events={this.state.events} getEvent={this.getOneEvent}  change = {this.change} />
    let api2 =  <EventName getEvent={()=>this.getOneEvent()} id={this.state.id} getList={()=>this.componentDidMount()}  events={this.state.events} back ={this.back} />
    // sDate={this.state.events.startDate} img={this.state.events.image}
        //   return <EventList  key={index} id={event.id} name={event.eventName} sDate={event.startDate} city={event.eventLocation} img={event.image} volnt={event.numberOfVolunteer}  getEvent={()=>this.getOneEvent(event.id)}  change = {this.change}/>

var s = [api , api2]
    return (
      <>
 

         
      {s[this.state.i]}
      </>

      
    )
  }
}

export default EventCard



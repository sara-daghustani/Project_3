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
            
        <div className="EventE">
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                
                <p> <strong>Event: </strong>{this.props.id}</p>
                <p> <strong>Image:  </strong></p>
                <p> <strong>Date:  </strong>{this.props.sDate}</p>
                <p> <strong>Location:  </strong>{this.props.city}</p>
                <p> <strong>Volunteers:  </strong>{this.props.volnt}</p>
                <button type='button' onClick={this.change} className='btn btn-warning mb-5 text-capitalize'>Go To Event</button>
                {/* <a href="/test" className='btn btn-warning mb-5 text-capitalize'>Go To Event</a> */}
                
            </div>
        </div>
            
        )
    }
}

export default EventList

// import React, { Component } from 'react'
// import Events from './Events'

// export default class EventList extends Component {
//     render() {
//         return (
//         <div className="App">

//           <header>
//           <div className="container h-100">
//             {/* <img src={logo} alt="logo" /> */}
//             <div className="row h-100 align-items-center">
//               <div className="col-lg-12">
//                 <h1 className="display-4 text-white mt-5 mb-2"></h1>
//                 <p className="lead mb-5 text-white-50"></p>
//               </div>
//             </div>
//           </div>
//         </header>
//                  <p className="Events_content">
//             {this.props.events.map((event) => {
//               return <Events
//                 title={event.title}
//                 date={event.date}
//                 location={event.location}
//                 volunteers={event.volunteers}
//               />

//             })}
//           </p>
          
//           </div>
//         )
//     }
// }





// state = {
//   events: []
// }
// componentDidMount () {
// axios.get('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json')
// .then(res => {
// console.log(res.data);
// this.setState({events: res.data})

// })
// .catch(err => {
// console.log(err)
// })
// }
// postSelectedHandler = (id) => {
//   this.setState({selectedPostId: id});
// }

// render () {
// let api = this.state.events.map((event, index) => {
//     return <EventName key={index} name={event.eventName} sDate={event.startDate} img={event.image}/>
//   })

//   return (
//       <>
//       {api && api}
//       </>
//   );
// }
// }
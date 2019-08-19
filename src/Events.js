// import React, { Component } from 'react'

// export default class EventE extends Component {
//       state = {
//     events: [
//       { id: "1", title: "Organizing", date: "13/12/2019", location: "Riyadh", volunteers: "5" },
//       { id: "2", title: "Dance", date: "13/12/2019", location: "Jeddah", volunteers: "1" },
//       { id: "3", title: "School", date: "13/12/2019", location: "Dammam", volunteers: "3" },
//       { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
//       { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
//       { id: "3", title: "School", date: "13/12/2019", location: "Dammam", volunteers: "3" },
//       { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
//       { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
//       { id: "4", title: "Drawing", date: "13/12/2019", location: "Abha", volunteers: "6" },
//     ]
//   }
//     render() {
//             {this.state.events.map((event) => {
//           return <EventE
//             title={event.title}
//             date={event.date}
//             location={event.location}
//             volunteers={event.volunteers}
//           />
//         })}
    
//         return (
//             <div className="EventE">
//                 <div className="">
//                     <p> <strong>Event: </strong>{this.state.events.title} </p>
//                     <p> <strong>Date:  </strong>{this.state.events.date}</p>
//                     <p> <strong>Location:  </strong>{this.state.events.location}</p>
//                     <p> <strong>Volunteers:  </strong>{this.state.events.volunteers}</p>
//                 </div>

//             </div>
//         )
//     }
// }




import React from 'react'
import './Events.css'


const Events = (props) => {
    return (
        <div className="EventE">
            <div className="">
                <p> <strong>Event: </strong>{props.title} </p>
                <p> <strong>Date:  </strong>{props.date}</p>
                <p> <strong>Location:  </strong>{props.location}</p>
                <p> <strong>Volunteers:  </strong>{props.volunteers}</p>
            </div>
        </div>
    )
}

export default Events
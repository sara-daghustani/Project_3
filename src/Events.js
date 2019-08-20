
import React from 'react'
import './Events.css'


const Events = (props) => {
    return (
        <div className="EventE">
            <div className="">
                <p> <strong>Event: </strong>{props.title} </p>
                <p> <strong>Image:  </strong>{props.image}</p>
                <p> <strong>Date:  </strong>{props.date}</p>
                <p> <strong>Location:  </strong>{props.location}</p>
                <p> <strong>Volunteers:  </strong>{props.volunteers}</p>
            </div>
        </div>
    )
}

export default Events
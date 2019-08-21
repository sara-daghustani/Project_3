
import React from 'react'
import './Events.css'

// const change = () => {
//     this.props.change(this.props.id)
// };


const Events = (props) => {
    return (
        <div onClick={props.change} className="EventE">
            <div className="">
            <svg class="bd-placeholder-img card-img-top" width="90%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="90%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                <p> <strong>Event: </strong>{props.title} </p>
                <p> <strong>Volunteers:  </strong>{props.volunteers}</p>
                <small> {props.date} _ {props.location}</small>
            </div>
            </div>




    )
}

export default Events
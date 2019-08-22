
import React from 'react'
import './Events.css'



const Events = (props) => {
    console.log("hi",props.image);
    
    return (
        <div onClick={props.change} className="EventE">
            <div className="">

          
           <img src={props.image} className="bd-placeholder-img card-img-top" width="90%" height="200" />
               
                <p> <strong>Event Titel: </strong> {props.title} </p>
                <small> <strong>Volunteers:  </strong>{props.volunteers}</small><br/>
                <small> <strong>Start Date:  </strong>{props.date}</small> <br/>
                <small> <strong>Location:  </strong>{props.location}</small> 
            </div>
        </div>

    )
}

export default Events
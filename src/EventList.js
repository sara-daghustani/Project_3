import React, { Component } from 'react'
import Events from './Events'

export default class EventList extends Component {
    render() {
        return (
                 <p className="Events_content">
            {this.props.events.map((event) => {
              return <Events
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
              />

            })}
          </p>
        )
    }
}

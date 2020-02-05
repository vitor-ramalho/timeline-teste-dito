import React from 'react'

class TimelineItem extends React.Component {

    render() {
        const events = this.props.data
        
        return events.map((events) => (
        <tr key={events.custom_data.key}>{events.custom_data.map((custom_data) => <td>{custom_data.value}</td> )}</tr>
        ))

        //return events.map((events) => console.log("evento: ", events.event,  events.timestamp, events.custom_data))
    }
}


export default TimelineItem
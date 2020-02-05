import React from 'react'

class TimelineItem extends React.Component {

    getList(purchase){
        Object.keys(purchase).map(function(key, i) {
            return <li key={i}><span key={i}>{purchase[key]}</span></li>;
        });
    };
    render() {
        return
            {Object.keys(purchase).map((keyName, i) => (
            <li key={i}>
                <span>key: {i} Name: {purchase[keyName]}</span>
            </li>
        ))}
            
        
    }
}


export default TimelineItem
import React from 'react'


const TimelineItem = (props) => {
    return props.products.map((product, index) => <tr key={index}><td>{product.name}</td><td>{'R$ ' + product.price}</td></tr>)
}


export default TimelineItem

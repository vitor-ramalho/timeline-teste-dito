import React, { useState, useEffect } from 'react'
import { List, Header, Body, Table } from './components';
import calendar from './assets/calendar.svg'
import check from './assets/check.svg'
import clock from './assets/clock.svg'
import money from './assets/money.svg'
import place from './assets/place.svg'

import TimelineItem from './TimelineItem'
// import TimelineData from '../data'

const Timeline = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    `https://storage.googleapis.com/dito-questions/events.json`
                );
                const data = await res.json();

                setData(data);
                setLoading(false);
            } catch (err) {
                alert(err);
            }
        };

        fetchData();
    }, []);

    const manipulateData = (data) => {
        const eventsReducer = data.events.reduce(purchasesAndProductsReducer, {
            purchases: [],
            products: []
        });

        return findPurchaseProducts(eventsReducer);


    }

    const purchasesAndProductsReducer = (accumulator, currentValue) => {
        currentValue.event === 'comprou-produto' ? accumulator.products.push(currentValue) : accumulator.purchases.push(currentValue)

        return { ...accumulator }

    }

    const findPurchaseProducts = ({ purchases, products }) => {
        return purchases.map((purchase) => {
            //console.log(purchases)
            return { ...purchase, products: products.filter(product => product.custom_data.transaction_id === purchase.custom_data.transsaction_id) };
        });
    };


    return (
        <>
            <h1>Timeline</h1>
            {loading ? (
                "Loading..."
            ) : (
                    manipulateData(data).map((purchase, index) => {

                        return (
                            <List>
                                <li className="timeline-left" key={index}>
                                    <div className="timeline-badge">
                                        <img src={check} alt="check" />
                                    </div>
                                    <div className="timeline-panel">
                                        <Header>
                                            <div><img src={calendar} alt="calendar" /></div>
                                            <div><img src={clock} alt="clock" /> </div>
                                            <div><img src={place} alt="place" /> </div>
                                            <div><img src={money} alt="money" /> </div>
                                        </Header>
                                        <Body>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th className="product-description">Produto</th>
                                                        <th>Preço</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                </tbody>
                                            </Table>
                                        </Body>
                                    </div>
                                </li>
                            </List>
                        )
                    })
                )}
        </>
    )

}


export default Timeline
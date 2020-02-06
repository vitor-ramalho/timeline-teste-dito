import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import { List, Header, Body, Table } from './components';
import calendar from './assets/calendar.svg'
import check from './assets/check.svg'
import clock from './assets/clock.svg'
import money from './assets/money.svg'
import place from './assets/place.svg'

import TimelineItem from './TimelineItem'

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
        if (currentValue.event === 'comprou-produto') {
            accumulator.products.push({ transaction: currentValue.custom_data.find(o => o.key === "transaction_id").value, name: currentValue.custom_data.find(o => o.key === "product_name").value, price: currentValue.custom_data.find(o => o.key === "product_price").value });
        } else {
            accumulator.purchases.push({ transaction: currentValue.custom_data.find(o => o.key === "transaction_id").value, revenue: currentValue.revenue, date: currentValue.timestamp, store_name: currentValue.custom_data.find(o => o.key === "store_name").value })
        }
        return { ...accumulator }
    }

    const findPurchaseProducts = ({ purchases, products }) => {
        return purchases.map((purchase) => {
            return { ...purchase, products: products.filter(product => product.transaction === purchase.transaction) };
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
                            <List key={index}>
                                <li className="timeline-left">
                                    <div className="timeline-badge">
                                        <img src={check} alt="check" />
                                    </div>
                                    <div className="timeline-panel">
                                        <Header>
                                            <div><img src={calendar} alt="calendar" />{Moment(purchase.date).format('DD/MM/YY')}</div>
                                            <div><img src={clock} alt="clock" />{Moment(purchase.date).format('hh:mm')} </div>
                                            <div><img src={place} alt="place" />{purchase.store_name}</div>
                                            <div><img src={money} alt="money" />{'R$ ' + purchase.revenue}</div>
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
                                                    <TimelineItem products= {purchase.products}/>
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

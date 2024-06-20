import React from 'react';
import "./Listpage.scss";
import { listData } from '../../lib/dummydata';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';


export default function Listpage() {
    const data = listData
    return (
        <div className='listPage'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data} />
            </div>
        </div>
    )
}

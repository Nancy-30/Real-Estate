import React from 'react';
import "./filter.scss"

export default function Filter() {
    return (
        <div className='filter'>
            <h1>Search results for <b>India</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type='text' id='city' placeholder='City Location' name='city' />
                </div>
            </div>

            <div className="bottom">

                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name='type' id='type'>
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name='property' id='property'>
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type='number' id='minPrice' placeholder='Any' name='minPrice' />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">max Price</label>
                    <input type='number' id='maxPrice' placeholder='Any' name='maxPrice' />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type='text' id='bedroom' placeholder='Any' name='bedroom' />
                </div>

                <button>
                    <img src='/search.png' alt="search" className='searchIcon' />
                </button>

            </div>
        </div>
    )
}

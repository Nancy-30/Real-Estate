import React from 'react'
import './homepage.scss'
import Searchbar from '../../components/Searchbar'

export default function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit necessitatibus aut ad laboriosam. Quam quis error nesciunt, ea quas doloremque culpa illum unde hic dolor eius? Officia, tempore aut!
                    </p>
                    <Searchbar />

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className="box">
                            <h1>100</h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className="box">
                            <h1>1200</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="imgContainer">
                <img src="/bg.png" alt="bg" />
            </div>
        </div>
    )
}

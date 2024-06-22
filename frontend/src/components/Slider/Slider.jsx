import React, { useState } from 'react'
import "./slider.scss";

export default function Slider({ images }) {
    const [imgIndex, setImageIndex] = useState(null);

    const changeSlides = (direction) => {
        if (direction === "left") {
            if (imgIndex === 0) {
                setImageIndex(images.length - 1);
            }
            else {
                setImageIndex(imgIndex - 1);
            }
        }
        else {
            if (imgIndex === images.length - 1) {
                setImageIndex(0);
            }
            else {
                setImageIndex(imgIndex + 1);
            }
        }
    }

    return (
        <div className='slider'>

            {imgIndex != null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={() => changeSlides("left")}>
                        <img src="/arrow.png" alt="arrow" />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imgIndex]} alt="" />
                    </div>
                    <div className="arrow" onClick={() => changeSlides("right")}>
                        <img src="/arrow.png" alt="arrow" className='right' />
                    </div>
                    <div className="close" onClick={() => setImageIndex(null)}>X</div>
                </div>
            )}

            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
            </div>

            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} />
                ))}
            </div>
        </div>
    )
}

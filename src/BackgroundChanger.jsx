import React, {useState} from "react";
import img1 from "/public/totoro_1.jpeg";
import img2 from "/public/totoro_2.jpeg";
import img3 from "/public/totoro_3.jpeg";

export default function BackgroundChanger() {
    const images = [img1, img2, img3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);    
    const changeBackground = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
    return (
        <div 
            className="background-changer"
            style={{backgroundImage: `url(${images[currentImageIndex]})`}}
            onClick={changeBackground}>
            <div className="overlay">
                <h2>Click anywhere to change background</h2>
            </div>
        </div>
    );
}

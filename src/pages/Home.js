import React from 'react';
import BannerImage from "../assets/food.jpeg";
import "../styles/Home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>INDIAN FOOD AT CLICK.</p>
                <Link>
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
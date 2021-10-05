import React from 'react'
import Banner from './Banner';
import "./Home.css";
import Products from './Products';


function Home() {
    return (
        <div className="home">
            <img src="../assets/cover.png" alt="cover"/>
            <Products/>
            <Banner/>
        </div>
    )
}

export default Home

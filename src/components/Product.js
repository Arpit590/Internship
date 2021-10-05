import React from 'react'
import "./Product.css";


function Product({new__price, org, imgSrc, title}) {
    return (
        <div className="product">
            <div className="image__container">
                <img src={imgSrc} alt="product"/>
                <p>ON SALE</p>
            </div>
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <p className="new__price">{new__price}</p>
                    <p className="original__price">{org}</p>
                </div>
                <div className="dots">
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                </div>
            </div>
        </div>
    )
}

export default Product

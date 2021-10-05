import React from 'react'
import Product from './Product';
import "./Products.css";


function Products() {
    return (
        <div className="products">
            <div className="products__heading">
                <div className="products__heading1">
                    <p>FEATURED COLLECTION</p>
                    <h2>SPRING OASIS</h2>
                </div>
                <div className="products__heading2">
                    <img src="../assets/group.svg" alt="Heading"/>
                </div>
            </div>
            <div className="product__list">
                <Product title="ESSENTIAL CHIFFON HIJAB - BLACK"
                org="$ 5.99"
                new__price="$ 5.99"
                imgSrc="../assets/image1.png"
                />
                <Product
                title="ESSENTIAL CHIFFON HIJAB - BLACK"
                org="$ 5.99"
                new__price="$ 5.99"
                imgSrc="../assets/image2.png"/>
                <Product
                title="ESSENTIAL CHIFFON HIJAB - BLACK"
                org="$ 5.99"
                new__price="$ 5.99"
                imgSrc="../assets/image1.png"/>
                <Product
                title="ESSENTIAL CHIFFON HIJAB - BLACK"
                org="$ 5.99"
                new__price="$ 5.99"
                imgSrc="../assets/image2.png"/>
            </div>
        </div>
    )
}

export default Products

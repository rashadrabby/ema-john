import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { category, name, seller, price, ratings, img } = props.product;
    const { handleAddToCart, product } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p>Category: {category}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'><p className='btn-text'>Add to Cart</p><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
            <div>
                <p>Selected Items: <strong> {quantity}</strong></p>
                <p>Total Price:<strong> ${total}</strong></p>
                <p>Total Shipping Charge:<strong> ${shipping}</strong></p>
                <p>Tax:<strong> ${tax}</strong></p>
            </div>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <div className='btn'>
                <button onClick={removeFromDb()} className='clear'><p>Clear Cart</p><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                <button onClick={removeFromDb()} className='review'><p>Review Order</p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>

        </div>
    );
};

export default Cart;
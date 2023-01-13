import React, { useContext, useRef } from 'react';
import { CustomContext } from '../components/CustomContext';
import CartItem from '../components/CartItem';

function Cart() {
    const { cartItems, emptyCart } = useContext(CustomContext);
    const orderButton = useRef();

    const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} />);
    const totalCost = cartItems.length * 5.99;
    const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    const placeOrder = () => {
        orderButton.current.disabled = true;
        orderButton.current.innerText = 'Ordering...';
        setTimeout(() => {
            emptyCart();
            orderButton.current.disabled = false;
            orderButton.current.innerText = 'Place Order';
        }, 1500);
    };

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {cartItems.length ? (
                    <button onClick={placeOrder} ref={orderButton}>
                        Place Order
                    </button>
                ) : (
                    <p>You have no items in your cart.</p>
                )}
            </div>
        </main>
    );
}

export default Cart;

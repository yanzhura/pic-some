import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomContext } from './CustomContext';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
    const { toggleCartItems } = useContext(CustomContext);
    const [isHovered, ref] = useHover();

    const trashIconClass = isHovered ? 'fill' : 'line';

    return (
        <div className="cart-item">
            <i ref={ref} onClick={() => toggleCartItems(item)} className={`ri-delete-bin-${trashIconClass}`}></i>
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default CartItem;

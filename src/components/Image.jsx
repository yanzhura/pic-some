import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomContext } from './CustomContext';
import useHover from '../hooks/useHover';

function Image({ className, img }) {
    const { toggleFavourite, checkCart, toggleCartItems } = useContext(CustomContext);
    const [isHovered, ref] = useHover();

    const favouriteIcon = () => {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavourite(img.id)} className="ri-heart-fill favorite"></i>;
        } else if (isHovered) {
            return <i onClick={() => toggleFavourite(img.id)} className="ri-heart-line favorite"></i>;
        }
    };

    const cartIcon = () => {
        if (checkCart(img)) {
            return <i onClick={() => toggleCartItems(img)} className="ri-shopping-cart-fill cart"></i>;
        } else if (isHovered) {
            return <i onClick={() => toggleCartItems(img)} className="ri-add-circle-line cart"></i>;
        }
    };

    return (
        <div ref={ref} className={`${className} image-container`}>
            <img src={img.url} alt="" className="image-grid" />
            {favouriteIcon()}
            {cartIcon()}
        </div>
    );
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;

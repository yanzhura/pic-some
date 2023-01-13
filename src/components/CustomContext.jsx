import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
const Context = createContext();

const CustomContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then((response) => setAllPhotos(response.data));
    }, []);

    const toggleFavourite = (id) => {
        const updatedPhotos = allPhotos.map((photo) => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                };
            }
            return photo;
        });
        setAllPhotos(updatedPhotos);
    };

    const checkCart = (image) => {
        return cartItems.some((element) => element.id === image.id);
    };

    const toggleCartItems = (image) => {
        if (checkCart(image)) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== image.id));
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, image]);
        }
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <Context.Provider
            value={{
                allPhotos,
                toggleFavourite,
                cartItems,
                checkCart,
                emptyCart,
                toggleCartItems
            }}>
            {children}
        </Context.Provider>
    );
};

export { CustomContextProvider, Context as CustomContext };

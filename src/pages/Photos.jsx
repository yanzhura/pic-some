import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomContext } from '../components/CustomContext';
import { getClass } from '../utils';
import Image from '../components/Image';

function Photos() {
    const { allPhotos } = useContext(CustomContext);

    const images = allPhotos.map((image, index) => (
        <Image key={image.id} img={image} className={getClass(index)}></Image>
    ));

    return <main className="photos">{images}</main>;
}

Photos.propTypes = {
    allPhotos: PropTypes.array
};

export default Photos;

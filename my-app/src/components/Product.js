import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

Product.propTypes = {

};

function Product(props) {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const retrieveProducts = () => {

    }

    return (
        <div>

        </div>
    );
}

export default Product;
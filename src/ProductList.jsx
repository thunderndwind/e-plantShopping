import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = (product) => {
        dispatch(addItem({
            name: product.name,
            image: product.image,
            cost: product.cost,
        }));
    };

    // Retrieve the quantity of a specific product in the cart
    const getItemQuantity = (productName) => {
        const item = cartItems.find(item => item.name === productName);
        return item ? item.quantity : 0;
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.name} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>{product.cost}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart ({getItemQuantity(product.name)})
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

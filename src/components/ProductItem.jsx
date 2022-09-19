import React, { useContext, useState, useEffect} from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addToCartGreyImage from '@icons/bt_add_to_cart_grey.svg';

const ProductItem = ({product}) => {
	const { state, addToCart, removeFromCart } = useContext( AppContext );

	const handleClick = item => {
		if(state.cart.includes(item)){
			removeFromCart(item);
		}
		else {
			addToCart(item);
		}
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => {
					handleClick(product)
					}}>
					{
						state.cart.includes(product) && <img src={addToCartGreyImage} alt="" />
					}
					{
						!state.cart.includes(product) && <img src={addToCartImage} alt="" />
					}
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
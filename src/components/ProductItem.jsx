import React, { useContext} from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { state, addToCart } = useContext( AppContext );

	const handleClick = item => {
		if(state.cart.includes(item)){
			console.log('It was added before.')
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
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
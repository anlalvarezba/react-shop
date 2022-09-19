import React, { useContext, useState} from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addToCartGreyImage from '@icons/bt_add_to_cart_grey.svg';

const ProductItem = ({product}) => {
	const { state, addToCart, removeFromCart } = useContext( AppContext );

	const [added, setAdded] = useState(false);

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
					setAdded(!added);
					}}>
					{/* <img added={added.toString()}
					src={addToCartImage} alt="" /> */}
					{!added && <img added={added.toString()}
					src={addToCartImage} alt="" />
					}
					{added && <img added={added.toString()}
					src={addToCartGreyImage} alt="" />
					}
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
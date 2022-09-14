import React, { useState, useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext";
import { OrderItem } from "@components/OrderItem";
import '@styles/MyOrder.scss';

import flechita from '@icons/flechita.svg';

const MyOrder = ({setToggleOrders}) => {

	const { state } = useContext(AppContext);	

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => (accumulator + currentValue.price);
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

    return(
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={()=> setToggleOrders(false)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => {
				     return(
					 <OrderItem product={product} key={`orderItem-${product.id}`} />
					 )
				})}
			</div>
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
		</aside>);
}

export { MyOrder };
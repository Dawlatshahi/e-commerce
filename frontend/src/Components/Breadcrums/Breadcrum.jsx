import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrum.css';

const Breadcrum = (props) => {
	const { product } = props;

	// Check if the product object and its properties exist
	if (!product || !product.category || !product.name) {
		return <div>Loading...</div>; // or some other fallback UI
	}

	return (
		<div className="breadcrum">
			HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
			{product.category} <img src={arrow_icon} alt="" />
			{product.name}
		</div>
	);
};

export default Breadcrum;

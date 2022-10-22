import React from 'react';
import './RecipeTile.css';

const RecipeTile = ({ props}) => {
	return (
		// props.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
		<div className='recipeTile'>
     	<p className='recipeTile__name'>{props.recipe.label}</p>
			<img
				className='recipeTile__img'
				src={props.recipe.image}
				alt={props.recipe.label}
				onClick={() => window.open(props.recipe.url)}></img>
		</div>
		// )
	);
};

export default RecipeTile;

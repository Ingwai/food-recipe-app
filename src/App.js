import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import RecipeTile from './component/RecipeTile';

function App() {
	const APP_ID = '5b442bab';
	const APP_KEY = '41e2ac3ba3cedc93f2c50f667a910457';
	const [query, setQuery] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [healthLabel, setHealthLabel] = useState('vegetarian');

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;

	const getRecipeInfo = async () => {
		let result = await Axios.get(url);
		setRecipes(result.data.hits);
	};

	const onSubmit = e => {
		e.preventDefault(); //zapobiega przeładowaniu się strony przy kliknięciu na button
		getRecipeInfo();
	};

	const queryRecipeHandler = e => setQuery(e.target.value);

	return (
		<div className='app'>
			<h1>
				<u>Food Recipe Hub</u>
			</h1>
			<form className='app__searchForm' onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Type the ingredient'
					autoComplete='Off'
					className='app__input'
					value={query}
					onChange={queryRecipeHandler}
				/>

				<select className='app__healthLabels'>
					<option value='vegan' onClick={() => setHealthLabel('vegan')}>
						vegan
					</option>
					<option value='vegetarian' onClick={() => setHealthLabel('vegetarian')}>
						vegetarian
					</option>
					<option value='low-sugar' onClick={() => setHealthLabel('low-sugar')}>
						low-sugar
					</option>
					<option value='dairy-free' onClick={() => setHealthLabel('dairy-free')}>
						dairy-free
					</option>
					<option value='immuno-supportive' onClick={() => setHealthLabel('immuno-supportive')}>
						immuno-supportive
					</option>
					<option value='wheat-free' onClick={() => setHealthLabel('wheat-free')}>
						wheat-free
					</option>
				</select>
				<input type='submit' className='app__submit' value='Get Recipe'></input>
			</form>
			<div className='app__recipes'>
				{recipes.map((recipe, index) => (
					<RecipeTile props={recipe} key={`${index}${recipe.recipe.label}`} />
				))}
			</div>
		</div>
	);
}

export default App;

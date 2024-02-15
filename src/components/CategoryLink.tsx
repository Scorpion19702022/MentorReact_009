import { Link } from 'react-router-dom'

import Meat from '../assets/beef.png'
import Cake from '../assets/cake.png'
import Soup from '../assets/soup.png'
import Vegetable from '../assets/vegetable.png'

const CategoryLink = () => {
	return (
		<div>
			<Link to='/category?name=meat'>
				<img src={Meat} alt='meat' />
			</Link>
			<Link to='/category?name=cake'>
				<img src={Cake} alt='cake' />
			</Link>
			<Link to='/category?name=soup'>
				<img src={Soup} alt='soup' />
			</Link>
			<Link to='/category?name=vege'>
				<img src={Vegetable} alt='vegetable' />
			</Link>
		</div>
	)
}

export default CategoryLink

import { Link } from 'react-router-dom'

import Meat from '../assets/beef.png'
import Cake from '../assets/cake.png'
import Soup from '../assets/soup.png'
import Vegetable from '../assets/vegetable.png'

import styles from '../components/Category.module.css'

const CategoryLink = () => {
	return (
		<div className={styles.wrapper_category_link}>
			<Link to='/category?name=meat'>
				<img className={styles.link_img} src={Meat} alt='meat' />
			</Link>
			<Link to='/category?name=cake'>
				<img className={styles.link_img} src={Cake} alt='cake' />
			</Link>
			<Link to='/category?name=soup'>
				<img className={styles.link_img} src={Soup} alt='soup' />
			</Link>
			<Link to='/category?name=vege'>
				<img className={styles.link_img} src={Vegetable} alt='vegetable' />
			</Link>
		</div>
	)
}

export default CategoryLink

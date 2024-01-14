import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Logo from './assets/foodLogo.png'
import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.boxNavLogo}>
				<img className={styles.logo} src={Logo} alt='logo' />
			</div>
			<div className={styles.boxNavIcon}>
				<DarkModeIcon className={styles.iconDark} />
				<LightModeIcon className={styles.iconLight} />
			</div>
			<div className={styles.boxNavFavorite}>
				<FavoriteBorderIcon className={styles.iconFavorite} />
			</div>
		</div>
	)
}

export default NavBar

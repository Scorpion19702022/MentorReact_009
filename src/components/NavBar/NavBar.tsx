import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Logo from './assets/przepisy.png'
import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.boxNavLogo}>
				<img className={styles.logo} src={Logo} alt='logo' />
			</div>
			<div className={styles.boxNavIcon}>
				<DarkModeIcon />
				<LightModeIcon />
			</div>
			<div className={styles.boxNavFavorite}>
				<FavoriteBorderIcon />
			</div>
		</div>
	)
}

export default NavBar

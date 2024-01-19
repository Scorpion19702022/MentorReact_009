import React from 'react'

// import DarkModeIcon from '@mui/icons-material/DarkMode'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Logo from './assets/logo_ingredients.png'
import styles from './NavBar.module.css'

import DarkIcon from './assets/dark_icon.png'
import SunIcon from './assets/sun_icon2.png'
import HeartIcon from './assets/heart_icon.png'

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.boxNavLogo}>
				<img className={styles.logo} src={Logo} alt='logo' />
			</div>
			<div className={styles.boxNavIcon}>
				{/* <DarkModeIcon className={styles.iconDark} style={{ width: '50px', height: '50px' }} />
				<LightModeIcon className={styles.iconLight} /> */}
				<img className={styles.iconDark} src={DarkIcon} alt='dark icon' />
				<img className={styles.iconLight} src={SunIcon} alt='sun icon' />
			</div>
			<div className={styles.boxNavFavorite}>
				{/* <FavoriteBorderIcon className={styles.iconFavorite} /> */}
				<img className={styles.iconFavourite} src={HeartIcon} alt='favourite icon' />
			</div>
		</div>
	)
}

export default NavBar

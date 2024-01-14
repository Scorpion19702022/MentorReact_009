import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Logo from './assets/przepisy.png'

const NavBar = () => {
	return (
		<div>
			<img src={Logo} alt='logo' />
			<div>
				<DarkModeIcon />
				<LightModeIcon />
			</div>
			<FavoriteBorderIcon />
		</div>
	)
}

export default NavBar

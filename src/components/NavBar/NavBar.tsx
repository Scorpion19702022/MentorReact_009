import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const NavBar = () => {
	return (
		<div>
			<span>LOGO</span>
			<div>
				<DarkModeIcon />
				<LightModeIcon />
			</div>
			<FavoriteBorderIcon />
		</div>
	)
}

export default NavBar

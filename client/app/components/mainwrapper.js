import React from 'react'

import '../fonts/karla.css'
import Layer from './layer'
import NavBar from './navbar'
import Background from './background'
import Footer from './footer/footer'
import MainSplash from './main_splash/splash'
import SecondSection from './second_section'

const MainWrapper = () => {
	return (
		<div>
			<Layer zIndex="1">
				<Background />
			</Layer>
			<Layer zIndex="2">
				<MainSplash />
				<SecondSection />
				<Footer />
			</Layer>
			<Layer zIndex="3">
				<NavBar />
			</Layer>
		</div>
	)
}


export default MainWrapper
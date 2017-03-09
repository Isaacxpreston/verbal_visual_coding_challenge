import React from 'react'

import '../fonts/karla.css'

import Layer from './layer'
import NavBar from './navbar'
import Background from './background'
import Footer from './footer'
import MainSplash from './splash'
import SecondSection from './second_section'

const MainWrapper = React.createClass({
	render () {
		return (
			<div>
				<Background />
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
})


export default MainWrapper
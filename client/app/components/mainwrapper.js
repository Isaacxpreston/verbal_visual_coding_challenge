import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import '../fonts/open_sans.css'

import Component from './component'
import Layer from './layer'
import NavBar from './navbar'
import Background from './background'
import Footer from './footer'
import MainSplash from './splash'
import SecondSection from './second_section'

const Main = React.createClass({

	//just have two or three set dimensions for background

	//todo
		//scroll speed on layers

		//add arrow
		//add box shadow

		//snap to sections like on verbal visual website

		//mediaquery main header at 650px

		//set navbar top position right below background image dimensions
		//change immediately on scroll

		//mediaquery the header at 650px

	render () {
		return (
			<div>
				<Background />

				<Layer zIndex="2">
					<MainSplash />

					<SecondSection />

					<Footer />

				</Layer>

				<NavBar />
				
			</div>
		)
	}
})

//remove me
function mapStatetoProps (state=null) {
	return {
		simpleReducer: state.simpleReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;
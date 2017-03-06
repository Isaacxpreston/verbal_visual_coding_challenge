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
					
					<Component background="white" padding="7.5em">
						<div style={{
							margin: "auto",
							paddingBottom: "1.25em",
							fontSize: "1.85em",
						}}>
							Second Section Header
						</div>

						<div style={{
							margin: "auto",
						}}>
							<img style={{
								maxWidth: "1050px",
							}}
							src={require('../images/image2.jpg')} alt="background" />
						</div>

						<Footer />
					</Component>
				</Layer>

				<Layer zIndex="3">
					<Component resize />
					<Component>
						<div style={{
							//move to same div as other image
							paddingTop: "10.65em", //keep
							margin: "auto",
						}}>
						<img style={{
							maxWidth: "1050px" //todo - create media queries for this
						}} src={require('../images/lines.png')} />
						</div>
					</Component>
				</Layer>


				{/*<NavBar />*/}
			
			</div>
		)
	}
})

function mapStatetoProps (state=null) {
	return {
		simpleReducer: state.simpleReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;
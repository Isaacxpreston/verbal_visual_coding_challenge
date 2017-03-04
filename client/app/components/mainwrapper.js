import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import '../fonts/open_sans.css'

import Component from './component'
import Layer from './layer'

const Main = React.createClass({

	//todo
		//scroll speed on layers

		//set navbar top position right below background image dimensions
		//change immediately on scroll

	render() {
		return (
			<div>
				<Layer zIndex="1">
					<img style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%"
					}}
					src={require('../images/image1.jpg')} alt="background" />
				</Layer>

				<Layer zIndex="2">
					<Component resize>
						<div style={{
							margin: "auto",
							width: "40%",
							background: "maroon",
						}}>
						here is the title section
						<div>
						AAAAHHHH
						</div>
						</div>
					</Component>

					<Component background="white" padding="7.5em">
						<div style={{
							margin: "auto",
							fontSize: "1.5em",
						}}>
							Second Section Header
						</div>
						<div style={{
							margin: "auto",
							padding: "1.5em"
						}}>
							<img style={{
								maxWidth: "100%",
							}}
							src={require('../images/image2.jpg')} alt="background" />
						</div>
						<div style={{
							margin: "auto",
							padding: "7.5em"
						}}>
							here is the footer
						</div>

					</Component>

					{/*<Component background="white" padding="7.5em">

					</Component>*/}

				</Layer>

				<Layer zIndex="3">
					<div style={{
						height: "2.75em",
						textAlign: "center",
						position: "fixed",
						width: "100%",
						background: "navy"
					}}>
						here is the nav bar 
					</div>
				</Layer>
			
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
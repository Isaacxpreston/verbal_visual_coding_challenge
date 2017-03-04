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
							marginTop: "auto",
							marginBottom: "auto",
							marginLeft: "auto",
							width: "40%",
							background: "maroon",
						}}>
							<div>
								from factory
							</div>
							<div>
								to store
							</div>
							<div>
								to out the door.
							</div>
							<div>
								abc creations offers end-to-end apparel
								manufacturing solutions for forward thinking clothing brands
							</div>
							<div>
								<button>our process</button>
								<button>our products</button>
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

				</Layer>

				<Layer zIndex="3">
					<div style={{
						height: "40px",
						textAlign: "center",
						position: "fixed",
						bottom: window.innerHeight - 40, //yeaaauuhh
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
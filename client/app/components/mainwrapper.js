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
							background: "black",
							color: "white"
						}}>
							<div style={{fontSize: "3em", textTransform: "uppercase"}}>
								from <span style={{fontWeight: "bold"}}> factory </span>
							</div>
							<div style={{fontSize: "3em", marginTop: "-5px", textTransform: "uppercase"}}>
								to <span style={{fontWeight: "bold"}}> store </span>
							</div>
							<div style={{fontSize: "3em", marginTop: "-5px", textTransform: "uppercase"}}>
								to <span style={{fontWeight: "bold"}}> out the door. </span>
							</div>
							<div style={{fontSize: "0.85em", marginTop: "15px", marginBottom: "5px"}}>
								ABC Creations offers
								<span style={{fontWeight: "bold"}}> international end-to-end apparel</span>
							</div>
							<div style={{fontSize: "0.85em", marginBottom: "20px"}}>
								manufacturing solutions for forward thinking clothing brands.
							</div>
							<div>
								<button style={{
									border: "2px solid white",
									fontSize: "0.85em",
									fontWeight: "bold",
									background: 'none',
									marginRight: "12.5px",
									textTransform: "uppercase",
									color: "white",
									width: "183px",
									height: "46px"
								}}>our process</button>
								<button style={{
									border: "2px solid white",
									fontSize: "0.85em",
									fontWeight: "bold",
									background: 'none',
									marginRight: "15px",
									textTransform: "uppercase",
									color: "white",
									width: "183px",
									height: "46px"
								}}>our products</button>
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
							padding: "30px"
						}}>
							<img style={{
								maxWidth: "100%",
							}}
							src={require('../images/image2.jpg')} alt="background" />
						</div>
						<div style={{
							margin: "auto",
							padding: "60px"
						}}>
							here is the footer
						</div>
					</Component>

				</Layer>

				<Layer zIndex="3">
					<div style={{
						display: "flex",
						justifyContent: "space-between",
						height: "40px",
						textAlign: "center",
						position: "fixed",
						bottom: window.innerHeight - 40, //make component, add window scroll listener
						width: "100%",
						background: "white"
					}}>
						<div style={{
							background: "grey",
							marginLeft: "2em"
							}}>
							abc creations
						</div> 
						<div style={{
							background: "grey",
							marginRight: "2em"
							}}>
							menu
						</div>
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
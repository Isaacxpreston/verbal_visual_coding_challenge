import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

import '../fonts/open_sans.css'

import Component from './component'
import Layer from './layer'
import NavBar from './navbar'

const Main = React.createClass({

	//todo
		//scroll speed on layers

		//snap to sections like on verbal visual website

		//mediaquery main header at 650px

		//set navbar top position right below background image dimensions
		//change immediately on scroll

	render () {
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
							marginTop: "175px",
							marginLeft: "auto",
							//background: "black",
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
							fontSize: "1.85em",
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
							padding: "8.5em"
						}}>
							<div style={{
								margin: "auto",
								textTransform: "uppercase",
								textAlign: "center",
								fontWeight: "bold",
								fontSize: "1.2em",
								padding: "2px"
							}}>Footer Title</div>
							<div style={{
								textAlign: "center",
								fontSize: "0.85em",
								padding: "2px"
							}}>Footer Link 1</div>
							<div style={{
								textAlign: "center",
								fontSize: "0.85em",
								padding: "2px"
							}}>Footer Link 2</div>
							<div style={{
								textAlign: "center",
								fontSize: "0.85em",
								padding: "2px"
							}}>Footer Link 3</div>
							<div style={{
								textAlign: "center",
								fontSize: "0.85em",
								padding: "2px"
							}}>Footer Link 4</div>
						</div>

					</Component>

				</Layer>

				<NavBar />

				{/*<Layer zIndex="3">
					<div style={{
						display: "flex",
						height: "50px",
						position: "fixed",
						//bottom: window.innerHeight - 50, //make component, add window scroll listener and resize listener
						bottom: 0,
						width: "100%",
						background: "white",
						fontSize: "1.85em",
						textTransform: "uppercase",
					}}>
						<div style={{
							margin: "auto",
							paddingLeft: "2em",
							flex: 1
							}}>
							abc creations
						</div> 
						<div style={{
							margin: "auto",
							paddingRight: "2em",
							}}>
							<svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
    						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
							</svg>
						</div>
					</div>
				</Layer>*/}
			
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
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

						<svg 
							style={{
								position: "absolute",
								top: "975px",
								left: "955px"
							}}
							xmlns="http://www.w3.org/2000/svg"
							width="1.736in" height="4.181in">
						<path fill-rule="evenodd"  stroke="rgb(0, 43, 73)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" 				fill="none"
							d="M1.537,2.188 L2.463,1.812 L122.463,297.812 L121.537,298.188 L1.537,2.188 Z"/>
						</svg>

						<svg
							style={{
								position: "absolute",
								top: "1135px",
								left: "200px"
							}} 
							xmlns="http://www.w3.org/2000/svg"
							width="1.736in" height="4.181in">
						<path fill-rule="evenodd"  stroke="rgb(0, 43, 73)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" 				fill="none"
							d="M1.537,2.188 L2.463,1.812 L122.463,297.812 L121.537,298.188 L1.537,2.188 Z"/>
						</svg>
						
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


				{/*<Layer zIndex="5">
					<svg 
 						xmlns="http://www.w3.org/2000/svg"
 						width="1.736in" height="4.181in">
					<path fill-rule="evenodd"  stroke="rgb(0, 43, 73)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
					d="M1.537,2.188 L2.463,1.812 L122.463,297.812 L121.537,298.188 L1.537,2.188 Z"/>
					</svg>
					<svg 
						xmlns="http://www.w3.org/2000/svg"
						width="1.736in" height="4.181in">
					<path fill-rule="evenodd"  stroke="rgb(0, 43, 73)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
					d="M1.537,2.188 L2.463,1.812 L122.463,297.812 L121.537,298.188 L1.537,2.188 Z"/>
					</svg>
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
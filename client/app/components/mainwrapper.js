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

		//add arrow
		//add box shadow

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
						}}>
							<div style={{fontSize: "3em", textTransform: "uppercase", color: "white"}}>
								from <span style={{fontWeight: "bold", color: "white"}}> factory </span>
							</div>
							<div style={{fontSize: "3em", marginTop: "-5px", textTransform: "uppercase", color: "white"}}>
								to <span style={{fontWeight: "bold", color: "white"}}> store </span>
							</div>
							<div style={{fontSize: "3em", marginTop: "-5px", textTransform: "uppercase", color: "white"}}>
								to <span style={{fontWeight: "bold", color: "white"}}> out the door. </span>
							</div>
							<div style={{fontSize: "0.85em", marginTop: "15px", marginBottom: "5px", color: "white"}}>
								ABC Creations offers
								<span style={{fontWeight: "bold", color: "white"}}> international end-to-end apparel</span>
							</div>
							<div style={{fontSize: "0.85em", marginBottom: "20px", color: "white"}}>
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
						<div style={{
							margin: "auto",
						}}>
							<svg 
								xmlns="http://www.w3.org/2000/svg"
								width="0.125in" height="0.653in">
								<path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
								d="M4.496,46.992 L8.986,36.151 L6.054,37.363 C6.054,22.040 6.054,16.753 6.054,1.433 C6.054,-0.509 2.946,-0.509 2.946,1.433 C2.946,16.751 2.946,22.037 2.946,37.357 L0.014,36.128 L4.496,46.992 Z"/>
							</svg>
						</div>
					</Component>

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

						<div style={{
							margin: "auto",
							paddingTop: "8.5em",
							paddingBottom: "8.5em"
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

				<Layer zIndex="3">
					<Component resize />
					<Component>
						<div style={{
							paddingTop: "10.5em", //keep
							margin: "auto",
						}}>
						<img style={{
							maxWidth: "1050px" //todo - create media queries for this
						}} src={require('../images/lines.png')} />
						</div>
					</Component>
				</Layer>


				<NavBar />
			
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
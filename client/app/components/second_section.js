import React from 'react'
import Component  from './component'

const SecondSection = React.createClass({
  render () {
    return (
      					<Component id="content" background="white" padding="7.5em">
						<div style={{
							margin: "auto",
							paddingBottom: "1.25em",
							fontSize: "1.85em",
						}}>
							Second Section Header
						</div>

						<div style={{
							position: "relative",
							margin: "auto",
							width: "100%",
							height: "459px",
							//change height on resize too
						//	background: "orange"
						//media query component margins around 1120px
						}}>
							<img src={require('../images/lines.png')} style= {{
								zIndex: 2,
								position: "absolute",
								margin: "auto",
								maxWidth: "100%",
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
							}} />
							<img src={require('../images/image2.jpg')} style={{
								zIndex: 1,
								position: "absolute",
								margin: "auto",
								maxWidth: "100%",
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
							}} />
						</div>

						
					</Component>
    )
  }
})

export default SecondSection
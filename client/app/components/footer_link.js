import React from 'react'
import Radium from 'radium'

const styles = {
  content: {
		display: "flex",
		flexDirection: "column",
    background: "white",
	},
  title: {
    margin: "auto",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2em",
    padding: "2px",
  },
  linkText: {
    textAlign: "center",
    fontSize: "0.85em",
    padding: "2px",
  }
}

const FooterLink = React.createClass( {
  render () {
    return (
      <div style={styles.linkText}>{this.props.children}</div>
    )
  }
})

export default Radium(FooterLink)
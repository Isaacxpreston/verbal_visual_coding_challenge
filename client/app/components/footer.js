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

const Footer = React.createClass( {
  render () {
  return (
    <div style={styles.content}>
    <div style={{
      margin: "auto",
      paddingTop: "8.5em",
      paddingBottom: "8.5em",
      '@media (max-width: 600px)': {
        paddingTop: 0
      }
    }}>	
      <div style={styles.title}>Footer Title</div>
      <div style={styles.linkText}>Footer Link 1</div>
      <div style={styles.linkText}>Footer Link 2</div>
      <div style={styles.linkText}>Footer Link 3</div>
      <div style={styles.linkText}>Footer Link 4</div>
    </div>
    </div>
  )
  }
} )

export default Radium(Footer)
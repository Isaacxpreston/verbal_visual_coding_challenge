import React from 'react'
import Radium from 'radium'

import styles from '../styles/footer_link_styles'

const FooterLink = React.createClass( {
  render () {
    return (
      <div style={styles.linkText}>{this.props.children}</div>
    )
  }
})

export default Radium(FooterLink)
import React from 'react'
import Radium from 'radium'

import FooterLink from './footer_link'
import styles from '../styles/footer_styles'

const Footer = React.createClass( {
  render () {
  return (
    <div style={styles.content}>
    <div style={styles.wrapper}>	
      <div style={styles.title}>Footer Title</div>
      <FooterLink>Footer Link 1</FooterLink>
      <FooterLink>Footer Link 2</FooterLink>
      <FooterLink>Footer Link 3</FooterLink>
      <FooterLink>Footer Link 4</FooterLink>
    </div>
    </div>
  )
  }
} )

export default Radium(Footer)
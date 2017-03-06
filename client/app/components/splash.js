import React from 'react'
import Component from './component'

const MainSplash = () => {
  return (
    <Component resize>
      <div style={{
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
      //	margin: "auto"
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
          <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
          d="M4.496,46.992 L8.986,36.151 L6.054,37.363 C6.054,22.040 6.054,16.753 6.054,1.433 C6.054,-0.509 2.946,-0.509 2.946,1.433 C2.946,16.751 2.946,22.037 2.946,37.357 L0.014,36.128 L4.496,46.992 Z"/>
        </svg>
      </div>
    </Component>
  )
}

export default MainSplash
import React from 'react'
import '../../styles/main_splash_styles/button_styles.css'
//CSS fallback, Radium does not have good support for selectors yet

const Button = React.createClass({

  componentWillMount () {
    this.setState({
      mask: Math.random(),
      symbol: Math.random()
    })
  },

  render () {
    return (
      <div id="container">
        <div id="original">
          <div id="content">
            {this.props.children}
          </div>
        </div>
        <div id="button">
          <svg width="183" height="46"  className="svg-defs">
            <symbol id={this.state.symbol}>
              <text className="clip-text" textAnchor="middle"
                x="50%"
                y="61%"
              >
              {this.props.children}
              </text>
            </symbol>
            <mask id={this.state.mask}>
              <rect
                width="100%"
                height="100%"
                className="mask_shape">
              </rect>
              <use xlinkHref={"#" + this.state.symbol}></use>
            </mask>
          </svg>
          <svg width="183" height="46" 
            className="svg-inverted-mask">
            <rect
              mask={"url(#" + this.state.mask + ")"}
              className="shape-fill" />
            <use xlinkHref={"#" + this.state.symbol}
              className="text-transparent"
            ></use>
          </svg>
        </div>
      </div>
    )
  }
}) 

export default Button
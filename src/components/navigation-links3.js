import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links3.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={`navigation-links3-nav ${props.rootClassName} `}>
      <span className="navigation-links3-text">{props.text}</span>
      <span className="navigation-links3-text1">{props.text1}</span>
      <span className="navigation-links3-text2">{props.text2}</span>
      <span className="navigation-links3-text3">{props.text3}</span>
      <span className="navigation-links3-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text4: 'Blog',
  text1: 'Features',
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
  text: 'About',
}

NavigationLinks3.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks3

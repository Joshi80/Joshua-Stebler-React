import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.Home}
      </Link>
      <Link to="/about" className="navigation-links-navlink1">
        {props.About}
      </Link>
      <Link to="/portfolio" className="navigation-links-navlink2">
        {props.Portfolio}
      </Link>
      <Link to="/kontakt" className="navigation-links-navlink3">
        {props.Kontakt}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Portfolio: 'Portfolio',
  Home: 'Home',
  About: 'About',
  rootClassName: '',
  Kontakt: 'Kontakt',
}

NavigationLinks.propTypes = {
  Portfolio: PropTypes.string,
  Home: PropTypes.string,
  About: PropTypes.string,
  rootClassName: PropTypes.string,
  Kontakt: PropTypes.string,
}

export default NavigationLinks

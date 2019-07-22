import React from 'react';
import { Link } from 'react-router-dom'

function OpenMenu(props) {
  const { menuToggle, } = props
  return (
    <div className="open-menu" id={ menuToggle? "open" : "closed"}>
      <div className="menu-content">
        <Link to='/'>HOVER ANIMATION</Link>
        <Link to='/buttons'>BUTTONS</Link>
        <Link to='/toggle'>TOGGLE</Link>
        <Link to='/input'>INPUT</Link>
        <Link to='/video'>VIDEO FRAME</Link>
        <Link to='/square-load'>SQUARE LOAD</Link>
      </div>
    </div>
  )
}

export default OpenMenu;

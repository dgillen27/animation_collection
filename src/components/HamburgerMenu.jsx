import React from 'react';

function HamburgerMenu(props) {
  return (
    <div className="hamburger-menu" onClick={props.onClick}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </div>
  )
}

export default HamburgerMenu;

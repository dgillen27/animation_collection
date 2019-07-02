import React from 'react';

function HamburgerMenu(props) {
  const { onClick, menuToggle } = props
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <div className="burger" id={menuToggle? "top-burger" : null}></div>
      <div className="burger" id={menuToggle? "hidden-burger" : null}></div>
      <div className="burger" id={menuToggle? "bottom-burger" : null}></div>
    </div>
  )
}

export default HamburgerMenu;

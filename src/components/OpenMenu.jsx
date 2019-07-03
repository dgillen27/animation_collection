import React from 'react';

function OpenMenu(props) {
  const { menuToggle} = props
  return (
    <div className="open-menu" id={ menuToggle? "open" : "closed"}>
      <div className="menu-content">
        <h2>WELCOME/HOVER ANIMATION</h2>
        <h2>BUTTONS</h2>
        <h2>TOGGLE</h2>
      </div>
    </div>
  )
}

export default OpenMenu

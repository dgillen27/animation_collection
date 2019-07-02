import React from 'react';

function OpenMenu(props) {
  const { menuToggle} = props
  return (
    <div className="open-menu" id={ menuToggle? "open" : "closed"}>
      <div className="menu-content">
        <h2>HOVER ANIMATION</h2>
        <h2>BUTTONS</h2>
      </div>
    </div>
  )
}

export default OpenMenu

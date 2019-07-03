import React from 'react';

function Toggle(props) {
  const { handleCheckboxChange, checked } = props;
  return (
    <div className="toggle-page" style={{ background: checked? "#131313" : "white"}}>
      <input id="toggle" name="toggle" type="checkbox" onClick={handleCheckboxChange}/>
      <label id="toggle-label" htmlFor="toggle">
      </label>
    </div>
  )
}

export default Toggle;

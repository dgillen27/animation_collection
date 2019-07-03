import React from 'react';

function Toggle(props) {
  const { handleCheckboxChange, checked } = props;
  return (
    <div>
      <div className="above-toggle" style={{ background: checked? "#131313" : "white"}}>
        { checked ? <h1 style={{ color: checked? "white" : "black"}}>Night Mode</h1> : <h1>Day Mode</h1>}
      </div>
      <div className="toggle-page" style={{ background: checked? "#131313" : "white"}}>
        <input id="toggle" name="toggle" type="checkbox" onClick={handleCheckboxChange}/>
        <label id="toggle-label" htmlFor="toggle">
        </label>
      </div>
    </div>
  )
}

export default Toggle;

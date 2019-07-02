import React from 'react';

function Input() {
  return(
    <div className="input-page">
      <input id="input" name="input" type="text" required/>
      <label for="input">Email Address</label>
    </div>
  )
}

export default Input;

import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import HamburgerMenu from './components/HamburgerMenu';
import ButtonsPage from './components/ButtonsPage';
import OpenMenu from './components/OpenMenu';
import Input from './components/Input';
import Toggle from './components/Toggle';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuToggle: false,
      checked: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  toggleMenu(ev) {
    ev.preventDefault();
    const { menuToggle } = this.state
    this.setState({
      menuToggle: menuToggle? false : true
    })
  }

  handleCheckboxChange(ev) {
    this.setState({
      checked: ev.target.checked
    })
  }

  render() {
    const { menuToggle, checked } = this.state
    return (
      <div className="App">
        <Title />
        <HamburgerMenu
          onClick={this.toggleMenu}
          menuToggle={menuToggle}/>
        <ButtonsPage />
        <OpenMenu
          menuToggle={menuToggle}/>
        <Toggle
          handleCheckboxChange={this.handleCheckboxChange}
          checked={checked}/>
        {/*<Input />*/}
      </div>
    );
  }
}

export default App;

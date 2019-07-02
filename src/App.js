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
      menuToggle: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu(ev) {
    ev.preventDefault();
    const { menuToggle } = this.state
    this.setState({
      menuToggle: menuToggle? false : true
    })
  }

  render() {
    const { menuToggle } = this.state
    return (
      <div className="App">
        <Title />
        <HamburgerMenu
          onClick={this.toggleMenu}
          menuToggle={menuToggle}/>
        <ButtonsPage />
        <OpenMenu
          menuToggle={menuToggle}/>
        <Toggle />
        {/*<Input />*/}
      </div>
    );
  }
}

export default App;

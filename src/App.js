import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import HamburgerMenu from './components/HamburgerMenu';
import ButtonsPage from './components/ButtonsPage';
import OpenMenu from './components/OpenMenu';
import Input from './components/Input';
import Toggle from './components/Toggle';
import VideoFrame from './components/VideoFrame';
import SquareLoad from './components/SquareLoad';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

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
      < HamburgerMenu
          onClick={this.toggleMenu}
          menuToggle={menuToggle}/>
        <OpenMenu
          menuToggle={menuToggle}/>
        <Route exact path="/" render={() => (
          <Title />
        )} />
        <Route exact path="/toggle" render={() => (
          <Toggle
          handleCheckboxChange={this.handleCheckboxChange}
          checked={checked}/>
        )} />
        <Route exact path="/buttons" render={() => (
          <ButtonsPage />
        )} />
        
        <Route exact path="/input" render={() => (
          <Input />
        )} />
        <Route exact path="/video" render={() => (<VideoFrame/>)} />
        <Route exact path="/square-load" render={() => (<SquareLoad />)} />
      </div>
    );
  }
}

export default withRouter(App);

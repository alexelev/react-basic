import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import MenuList from './Menu/MenuList';
import MenuList from './Menu/MenuList';



class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(({isMenuOpen}) => ({isMenuOpen: !isMenuOpen}))
  }

  onAsideClick = (e) => {
    //debugger;
    if (!this.aside.contains(e.target) && 
        !this.menuBtn.contains(e.target) &&  
        this.state.isMenuOpen
    ) {
      this.toggleMenu();
    }
  }

  handleBtnRef = (node) => {
    this.menuBtn = node;
  }

  handleAsideRef = (node) => {
    this.aside = node;
    if (node) {
      // при создании компонента добавляем слушатель события
      document.addEventListener('click', this.onAsideClick)
    } else {
      // при удалении компонента удаляем слушатель события
      // node === null
      document.removeEventListener('click', this.onAsideClick)
    }
  }

  render() {
    return (
      <div className="app">
        <header>
          <button
            ref={this.handleBtnRef}
            className="fa fa-bars menu-btn"
            onClick={this.toggleMenu}
          />
        </header>
        <Sidebar
          onRef={this.handleAsideRef}
          isOpen={this.state.isMenuOpen}
        />
        <MenuList>
          <MenuItem title="Dashboard"/>
          <MenuItem title="Admin panel"/>
        </MenuList>
      </div>
    );
  }
}

export default App;

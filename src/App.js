import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
    document.addEventListener('click', this.onAsideClick)
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
        <aside
          className={this.state.isMenuOpen ? 'isOpen' : ''}
          ref={this.handleAsideRef}
        >
          <p>aside</p>
        </aside>
        <main>main</main>
      </div>
    );
  }
}

export default App;

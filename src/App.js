import React, { Component } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Home from './Components/Home';

class App extends Component {
  state = {
    loggedIn: false,
    showSignUpPage: false
  };

  signUpHandler = () => {
    this.setState({ showSignUpPage: true });
  }

  showHomePageHanlder = () => {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loggedIn ?
          <MainPage showHomePage={this.showHomePageHanlder} signUpHandler={this.signUpHandler} showSignUpPage={this.state.showSignUpPage} />
          : <Home />
        }
      </div>
    );
  }
}

export default App;

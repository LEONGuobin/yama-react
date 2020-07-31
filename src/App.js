import React from 'react';
import { Main } from './Main';

class App extends React.Component {
  state = {
    isLoggedIn: Boolean(localStorage.getItem('TOKEN_KEY')),
  }

  handleLoginSucceed = (tokenJson) => {
    const token = JSON.parse(tokenJson);
    localStorage.setItem('TOKEN_KEY', token.token);
    localStorage.setItem('USER_NAME', token.username);
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    localStorage.removeItem('TOKEN_KEY');
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <Main handleLoginSucceed={this.handleLoginSucceed} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div className='ui active inline loader small'></div>;
    } else if (this.state.isSignedIn) {
      return (
        <div>
          <button className='ui red google button' onClick={this.onSignOut}>
            <i className='google icon' />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='ui red google button' onClick={this.onSignIn}>
            <i className='google icon' />
            SignIn with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div>
          <button className='ui loading button'>Loading</button>
        </div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            className='ui red google button aligned'
            onClick={this.onSignOutClick}
          >
            <i className='google icon' />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='ui red google button' onClick={this.onSingInClick}>
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

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

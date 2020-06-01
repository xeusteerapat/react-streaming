import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import GoogleAuth from './GoogleAuth';

const Header = ({ userId }) => {
  return (
    <div className='ui secondary pointing menu'>
      <div className='left menu'>
        <h2 className='ui header'>
          <i className='file video outline icon' />
          <div className='content'>
            <Link to='/'>StreamerX</Link>
            <div className='header'>
              <h3>Welcome: {!userId ? 'Loading...' : `${userId}`}</h3>
            </div>
          </div>
        </h2>
      </div>
      <div className='right menu'>
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);

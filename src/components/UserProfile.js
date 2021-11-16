import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <div>
          <Link to="./Login">Login</Link>
          <Link to="./userProfile">User Profile</Link>
          <Link to="./Debits">Debits</Link>
          <Link to="./Credits">Credits</Link>
          <Link to="./">Home</Link>
          <h2>Account Balance</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
        </div>
        
    );
  }
}

export default UserProfile;
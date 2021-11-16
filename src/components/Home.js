import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://www.india.com/wp-content/uploads/2016/11/Banks-1.jpg" alt="bank"/>
          {/* changed image, original link did not work; was not secure */}
          <h1>Bank of React</h1>
          <Link to="./Login">Login</Link>
          <Link to="./userProfile">User Profile</Link>
          <Link to="./Debits">Debits</Link>
          <Link to="./Credits">Credits</Link>
          <Link to="./">Home</Link>
          <h2>Account Balance</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;
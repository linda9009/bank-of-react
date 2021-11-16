import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import UserProfile from './components/UserProfile';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_schmoe',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    //get data from API response
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  } 


addDebit = (e) => {
  let newDebits = [...this.state.debits]
  let newDebit = {
    'description': e.description,
    'amount': e.amount,
    'date': e.date
  }
  newDebits.push(newDebit);
  let newBalance = this.state.accountBalance - e.amount
  this.setState({debits: newDebits})
  this.setState({accountBalance:  newBalance})
}

addCredit = (e) => {
  let newCredits = [...this.state.credits]
  let newCredit = {
    'description': e.description,
    'amount': e.amount,
    'date': e.date
  }
  newCredits.push(newCredit);
  let newBalance = this.state.accountBalance + e.amount
  this.setState({credits: newCredits})
  this.setState({accountBalance:  newBalance})
}
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  render() {
    const { debits } = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance}/>);
    const { credits } = this.state;
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance}/>);
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} accountBalance={this.state.accountBalance} />);

    return (
        <Router>
          <div>
            <Route exact path="/bank-of-react" render={HomeComponent}/>
            <Route exact path="/bank-of-react/userProfile" render={UserProfileComponent}/>
            <Route exact path="/bank-of-react/login" render={LogInComponent}/>
            <Route exact path="/bank-of-react/debits" render={DebitsComponent}/>  
            <Route exact path="/bank-of-react/credits" render={CreditsComponent}/>
            </div>
        </Router>
    );
  }
}

export default App;
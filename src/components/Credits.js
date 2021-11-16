import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Credits extends Component {
  constructor () {
    super()
    this.state = {
      credit: {
        id: '',
        description: '',
        amount: '',
        date: ''
      },
    }
  }
creditsView = () => {
        const { credits } = this.props;
        return credits.map((credit) => {
            let cutdate = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {cutdate}</li>
        }) 
    }


    updateDesc = (e) => {
      let newCredit = {...this.state.credit};
      const newdate = new Date().toISOString();
      newCredit.date = newdate;
      newCredit.description = e.target.value;
      this.setState({credit: newCredit})

  }
  updateAmount = (e) => {
      let newCredit = {...this.state.credit};
      newCredit.amount = e.target.value;
      this.setState({credit: newCredit})
  }

    updateCredit = (e) => {
      e.preventDefault();
      this.props.addCredit(this.state.credit);
    }

    render(){
    return (
    	<div>
    	   <h1>Credits</h1>
    	   {this.creditsView()}
           <form onSubmit={this.updateCredit}>
             <input type="text" name="description" onChange={this.updateDesc} />
             <input type="number" name="amount" onChange={this.updateAmount}/>
             <button type="submit">Add Credit</button>
           </form>
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
export default Credits;
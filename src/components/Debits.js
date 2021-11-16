import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Debits extends Component {
  constructor () {
    super()
    this.state = {
      debit: {
        id: '',
        description: '',
        amount: '',
        date: ''
      },
    }
  }
debitsView = () => {
        const { debits } = this.props;
        return debits.map((debit) => {
            let cutdate = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {cutdate}</li>
        }) 
    }


    updateDesc = (e) => {
      let newDebit = {...this.state.debit};
      const newdate = new Date().toISOString();
      newDebit.date = newdate;
      newDebit.description = e.target.value;
      this.setState({debit: newDebit})

  }
  updateAmount = (e) => {
      let newDebit = {...this.state.debit};
      newDebit.amount = e.target.value;
      this.setState({debit: newDebit})
  }

    updateDebit = (e) => {
      e.preventDefault();
      this.props.addDebit(this.state.debit);
    }

    render(){
    return (
    	<div>
    	   <h1>Debits</h1>
    	   {this.debitsView()}
           <form onSubmit={this.updateDebit}>
             <input type="text" name="description" onChange={this.updateDesc} />
             <input type="number" name="amount" onChange={this.updateAmount}/>
             <button type="submit">Add Debit</button>
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
export default Debits;
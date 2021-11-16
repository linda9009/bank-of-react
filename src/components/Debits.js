import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AccountBalance from './AccountBalance';

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
    	</div>
    );
    }
}
export default Debits;
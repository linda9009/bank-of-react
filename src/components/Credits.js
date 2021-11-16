const Credits = (props) => {
	let CreditsView = () => {
        const { Credits } = props;
        return Credits.map((debit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        }) 
    }
    return (
    	<div>
    	   <h1>Credits</h1>
    	   {CreditsView()}
           <form onSubmit={props.addCredit}>
             <input type="text" name="description" />
             <input type="number" name="amount" />
             <button type="submit">Add Credit</button>
           </form>
    	</div>

    )
}
export default Credits;

//withdraw button event handler
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [subtract, setSubtract] = React.useState(0);
  const {balance, updateBalance} = React.useContext(UserContext);  

  function validate(field, label){
    console.log(balance);
    console.log(subtract);
      if (!field || balance < subtract ) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    if (!validate(subtract, 'Withdraw Amount')) {
    return false;
    }
    updateBalance(parseFloat(balance) - parseFloat(subtract));
    setShow(false);
  }    

  function clearForm(){
    setSubtract(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Withdraw<br/>
              <input type="number" className="form-control" id="subtract" placeholder="Amount to Withdraw" onChange={e => setSubtract(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              </>
            )}
    />
  )
}
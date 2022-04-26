
//withdraw button event handler
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [subtract, setSubtract] = React.useState('');
  const {balance, setBalance} = React.useContext(UserContext);  

  function validate(field, label){
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
    setBalance(balance - subtract);
    setShow(true);
  }    

  function clearForm(){
    setSubtract('');
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
              <input type="input" className="form-control" id="subtract" placeholder="Amount to Withdraw" value={subtract} onChange={e => setSubtract(e.currentTarget.value)} /><br/>
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
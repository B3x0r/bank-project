//deposit button event handler
function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [add, setAdd] = React.useState('');
  const {balance, setBalance} = React.useContext(UserContext);    

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    if (!validate(add, 'Deposit Amount')) {
    return;
    }
    setBalance(balance + add);
    setShow(false);
  }    

  function clearForm(){
    setAdd('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Deposit<br/>
              <input type="input" className="form-control" id="add" placeholder="Amount to Deposit" value={add} onChange={e => setAdd(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              </>
            )}
    />
  )
}
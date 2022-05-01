//withdraw button event handler
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [ready, setReady]   = React.useState(false);
  const [subtract, setSubtract] = React.useState(0);
  const {balance, updateBalance} = React.useContext(UserContext);  

  function onChange(e){
    if (e.currentTarget.value.length===0){
      setReady(false)
    } else {
      setSubtract(e.currentTarget.value);
      setReady(true)}
  }

  function validate(field, label){
      if ((subtract<0 || balance < subtract) || isNaN(subtract) ) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      } else {
      return true;
      }
  }

  function handleCreate(){
    if (!validate(subtract, 'Withdraw Amount')) {
    return false;
    }
    updateBalance(parseFloat(balance) - parseFloat(subtract));
    setShow(false);
  }    

  function clearForm(){
    setSubtract('');
    setShow(true);
  }

  //input type="number" would be better for deposit, but then, you will not get a NaN error
  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      title="Balance"
      text={"$" + parseFloat(balance).toFixed(2)}
      body={show ? (  
              <>
              Withdraw<br/>
              <input type="text" className="form-control" id="subtract" placeholder="Amount to Withdraw" onChange={onChange} /><br/>
              <button type="submit" disabled={!ready} className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              </>
            )}
    />
  )
}
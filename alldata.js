function AllData(){
  const {user: {name, email, password}, balance} = React.useContext(UserContext);  

  return (
    <Card
      bgcolor="info"
      header="All Data in Store"
      body={(  
              <>
              Name<br/>
              <input type="input"  disabled className="form-control" id="name" value={name} /><br/>
              Email address<br/>
              <input type="input" disabled className="form-control" id="email" value={email} /><br/>
              Password<br/>
              <input type="input" disabled className="form-control" id="password" value={password} /><br/>
              Balance<br/>
              <input type="input" disabled className="form-control" id="Balance" value={"$" + balance} /><br/>
              </>
            )}
    />
  )
}

function Balance(){
  const [show, setShow]         = React.useState(true);
  const {balance} = React.useContext(UserContext); 

  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      title="Balance"
      text={"$" + balance}
    />    
  );  
}
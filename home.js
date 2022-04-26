function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Your Bank Landing Module"
      title="Welcome to the Bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

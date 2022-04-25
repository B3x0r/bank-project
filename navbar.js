function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" data-toggle="tooltip" data-placement="bottom" title="Home Page" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="enter your info here" href="#/CreateAccount/">Create Account<span className="tooltiptext"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Login Here if you Already Have an Account" href="#/login/">Login<span className="tooltiptext"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Make Deposit Here" href="#/deposit/">Deposit<span className="tooltiptext"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Make Withdraw Here" href="#/withdraw/">Withdraw<span className="tooltiptext"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Check your Balance Here" href="#/balance/">Balance<span className="tooltiptext"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="All Stored Information" href="#/alldata/">AllData<span className="tooltiptext"></span></a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [balance, setBalance] = React.useState(0);
  const [userArray, setUserArray] = React.useState([]);

  const createAccount = (name, email, password) => {
    const newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0,
      }
    setUser(newUser);
    pushUser(newUser);
  };

  const pushUser = (user) => {
    userArray.push(user)
    setUserArray(userArray)
  }

  const updateBalance = (balance) => {
    setBalance(balance)
  }
  return (
    <UserContext.Provider value={{ user, createAccount, updateBalance, balance, userArray}}>
      {children}
      </UserContext.Provider>
  );
}

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
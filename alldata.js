function AllData(){
  const {user: {name, email, password}, balance, userArray} = React.useContext(UserContext);  
console.log(userArray);

  return (
    <div className="container">
      <h3>All Data in Store </h3>

      <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Password</th>
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody>
      {userArray.map((user, index) => (
              <tr key={index}>
              <td>{index +1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{"$" + user.balance}</td>
            </tr>
      ))}

    </tbody>
  </table>
</div>
            )}

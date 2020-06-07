import React, {Component} from 'react';


import "./App.css"





class App extends Component {

  constructor(props){
    super(props)
    this.state={
      users:[],
      pageNum:1
    }
  }

  componentDidMount(){
    const url=`https://reqres.in/api/users?page=${this.state.pageNum}`;

    fetch(url)
      .then(res=>res.json())
      .then(res=>this.setState({users:res.data}))
      

  }



  render(){
    const {users}=this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Users' List</h1>
        </div>

        
          
        {users.map(user=>(

          <div className="card" key={user.id}>
          <img src={user.avatar} className="card-img-top" alt={`${user.email} avatar`} />
          <div className="card-body">
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <p className="card-text">{user.email}</p>
          
          </div>
          </div>

        ))}  
        
        
      </div>
    
    );

  }
  
}

export default App;

import React, {useState, Component, useEffect} from "react"
import '../styles/index.css'

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      
    };
    this.changeUsuario = this.changeUsuario.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  changePassword($event) {
    const newValue = $event.target.value;
    this.setState({ password: newValue });
  }

  changeUsuario($event) {
    const newValue = $event.target.value;
    this.setState({ username: newValue });
  }


  handleSumbit($event) {
    $event.preventDefault();
    console.log($event)
    if (this.state.username.length !== '' && this.state.password !== '') {
      let message = JSON.stringify(this.state)
      fetch('http://localhost:8000/getUser',{
          method: 'POST',
          headers: {"Content-Type": 'application/json'},
          body: message
      }).then((res => res.json())).
      then((data =>{
        console.log(data)
        if(data.success===true){
          localStorage.setItem("username", this.state.username)
          window.location= "/"
        }
        else{
          alert("Usuario o contraseña incorrecta")
          console.log(data)
        }
      }))
    }else{
      alert("Revise que los campos esten bien")
    }
  }

  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={this.handleSumbit}>
                    <div className="form-group">
                    <input type="text"  value={this.state.username} onChange={this.changeUsuario}
                        className="form-controls" placeholder="Username" autoFocus></input>
                    </div>
                    <div className="form-group">
                    <input type="password"  value={this.state.password} onChange={this.changePassword}
                         className="form-controls" placeholder="Password" autoFocus></input>
                    </div> 
                    <button className="btn btn-primary btn-block">
                      Log-In
                    </button>
                </form>
            </div>
        </div>
    );
  }
}

export default LogIn;
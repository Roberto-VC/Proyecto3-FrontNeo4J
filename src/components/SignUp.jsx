import React, {useState, Component, useEffect} from "react"

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      usuario: '',
      password: '',
      
    };
    this.changeUsuario = this.changeUsuario.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeNombre = this.changeNombre.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  changeEmail($event) {
    const newValue = $event.target.value;
    this.setState({ apellido: newValue });
  }

  changePassword($event) {
    const newValue = $event.target.value;
    this.setState({ password: newValue });
  }

  changeUsuario($event) {
    const newValue = $event.target.value;
    this.setState({ usuario: newValue });
  }

  changeNombre($event) {
    const newValue = $event.target.value;
    this.setState({ nombre: newValue });
  }

  handleSumbit($event) {
    $event.preventDefault();
    console.log($event)
    let message = JSON.stringify(this.state)
    console.log(message)
    fetch('http://localhost:8000/createUser/',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: message
    }).then((res => res.json())).then((data =>{
      console.log(data)
      if(data.success===true){
        localStorage.setItem("username", this.state.usuario)
        window.location= "/reviews"
      }
    }))
    

  }

  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={this.handleSumbit}>
                    <div className="form-group">
                        <input type="text"  value={this.state.nombre} onChange={this.changeNombre}
                         className="form-control" placeholder="Name" autoFocus></input>
                    </div>
                    <div className="form-group">
                    <input type="text"  value={this.state.apellido} onChange={this.changeEmail}
                        className="form-control" placeholder="Apellido" autoFocus></input>
                    </div>
                    <div className="form-group">
                    <input type="text"  value={this.state.username} onChange={this.changeUsuario}
                        className="form-control" placeholder="Username" autoFocus></input>
                    </div>
                    <div className="form-group">
                    <input type="text"  value={this.state.password} onChange={this.changePassword}
                         className="form-control" placeholder="Password" autoFocus></input>
                    </div> 
                    <button className="btn btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
  }
}

export default Singup;

import React, {Component} from 'react';
import './App.css';
import firebase from 'firebase';
import './configFirebase';
import WrapperConsumer from './store';

class App extends Component {
  /* constructor (props) {
    super(props);

    this.state = {
      user: null,
    }
  } */

  componentDidMount () {

    console.log("Llamado del willmount")
    // Si el usuario se ha autenticado, el objeto(user) tiene información.
    // Si no, el usuario es 'null'
    firebase.auth().onAuthStateChanged(user => {
      console.log("se va a actualizar el estado de user");
      this.props.context.getUser({ user });
    });
  }

  handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} a iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout = () => {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton = () => {
    if (!this.props.context.user) {
      return (
        <button onClick={this.handleAuth} className="App-btn-login">
          Iniciar sesión con Google
        </button>
      );
    } else  {
      return (
        <div className="App-intro">
          <p className="App-intro-user">¡Hola, { this.props.context.user.displayName }!</p>
          <img src={this.props.context.user.photoURL} alt={this.props.context.user.displayName} data-toggle="tooltip" data-placement="bottom" title={this.props.context.user.displayName}></img>    
          <button onClick={this.handleLogout} type="button" className ="btn btn-primary">Salir</button>
        </div>
      );
    }
  }

  render() {
    return (
        <div className="App">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
            </a>
            { this.renderLoginButton() }
          </nav>
        </div>
    );
  } 
}

export default WrapperConsumer(App); 
import React, {Component} from 'react';
import '../App.css';
import { auth, provider } from '../firebase';
import WrapperConsumer from '../store';
import Avatar from './user/avatar';

class Toolbar extends Component {

  async componentDidMount () {
    auth.onAuthStateChanged(user => {
	  this.props.context.dispatch({type: 'getUser', payload: {user} })
    });
  }

  handleAuth = () => {
    auth.signInWithPopup(provider)
  }

  handleLogout = () => {
    auth.signOut()
  }

  renderLoginButton = (user) => {
    if (!user) {
      return (
        <button onClick={this.handleAuth} className="App-btn-login">
          Iniciar sesión con Google
        </button>
      );
    } else  {
      return (
        <div className="App-intro">
          <p className="App-intro-user">¡Hola, { user.displayName }!</p>
          <Avatar {...user} />    
          <button onClick={this.handleLogout} type="button" className ="btn btn-primary">Salir</button>
        </div>
      );
    }
  }

  render() {
	const {context:{user}} = this.props;
    return (
        <div className="Toolbar">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
            </a>
            { this.renderLoginButton(user) }
          </nav>
        </div>
    );
  } 
}

export default WrapperConsumer(Toolbar); 
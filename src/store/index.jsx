import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext()

const reducer = (state, action) => {
    console.log('Reducer:', action)
    switch(action.type){
	    case 'getUser':
				return {...state, ...action.payload.user}
	}
}

class ContextStore extends Component {
    
    //getUser = user => {
    //    this.setState(user)
    //}   

    state = {
        user: null,
        getUser: this.getUser,
        dispatch: (action) => {
						const response = reducer(this.state, action)
						this.setState( response )
        } 
    }

    render() {
        const {store} = this.props
        const {dispatch} = this.state

        return (
            <Provider value={store? {[store]:this.state[store], dispatch} :this.state} >
                {this.props.comp}
            </Provider>
        )
    }
}

const WrapperConsumer = Component => {
    return (props) => {
        return(
            <Consumer>
                {context => <Component {...props} context={context} />}
            </Consumer>
        );
    }
}

export default WrapperConsumer;
export {ContextStore};
import React, {Component} from 'react';
import firebase from 'firebase';
import WrapperConsumer from '../store';

class formtweet extends Component {
    constructor(props){
        super(props);

        this.ref = firebase.firestore().collection('tweets');

        this.state = {
            content: '',
            author_uid: '',
            author_name: '',
            author_email: '',
            author_photoURL: '',
            likes: null
        }
    }

    onChange = e => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = e => {
        e.preventDefault();
    
        const { content } = this.state;
        const {context:{user}} = this.props;
    
        this.ref.add({
          content,
          author_uid: user.uid,
          author_name: user.displayName,
          author_email: user.email,
          author_photoURL: user.photoURL,
          likes: 0
        }).then((docRef) => {
          this.setState({
            content: '',
            author_uid: '',
            author_name: '',
            author_email: '',
            author_photoURL: '',
            likes: null
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }

    render() {
        const {content} = this.state;
        const {context:{user}} = this.props;
        return (
            <div>
                <form className="mt-4 mb-2" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" 
                        name="content" value={content} id="exampleInputtweet1" 
                        placeholder="¿Qué está pasando?" 
                        onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!user}>Twittear</button>
                </form>
                <div className="dropdown-divider"></div>
            </div>
        )
    }
}

export default WrapperConsumer(formtweet);

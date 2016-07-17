import React from 'react';
import {Link, browserHistory} from 'react-router';
import DataActions from '../actions/dataActions';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.email = props.data.email;
        this.state.error = props.data.error;

        this._submitChanges = this._submitChanges.bind(this);
        this._updateEmail = this._updateEmail.bind(this);
    }

    _submitChanges(event) {
        event.preventDefault();
        DataActions.updateEmail(event.target.newEmail.value);
        console.log(this.state.error);
        if(!this.state.error) {
            browserHistory.push('/index?updated=email');
        }
    }

    _updateEmail(event) {
        const emailValue = event.target.value;
        if (emailValue.length < 4) {
          this.setState({
              error: 'too short',
              email: event.target.value
          });
        } else {
          this.setState({
              error: false,
              email: event.target.value
          });
        }
    }

    render() {
        return (
            <div className="gel-wrap">
                <div>
                    <h1 className="gel-layout__item settings-heading">
                        Welcome to edit
                    </h1>
                    <form action="/edit" method="post" onSubmit={this._submitChanges}>
                      <p>{this.state.error}</p>
                      <label htmlFor="newEmail">Email</label>
                      <input
                        name="newEmail"
                        onChange={this._updateEmail}
                        value={this.state.email}
                      />
                      <input type="submit" value="Submit"/>
                    </form>
                    <Link to="/index">Back to index</Link>
                </div>
            </div>
        );
    }
}

export default Edit;

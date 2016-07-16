import React from 'react';
import {Link} from 'react-router';
import DataActions from '../actions/dataActions';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        console.log('run edit constructor');
        this._submitChanges = this._submitChanges.bind(this);
        this._updateEmail = this._updateEmail.bind(this);
    }

    _submitChanges(event) {
        event.preventDefault();
        console.log('submit');
    }

    _updateEmail(event) {
        console.log(event.target.value);
        console.log('updated, so set state or props ?')
        DataActions.updateEmail(event.target.value);
    }

    render() {
        return (
            <div className="gel-wrap">
                <div>
                    <h1 className="gel-layout__item settings-heading">
                        Welcome to edit
                    </h1>
                    <form action="/edit" method="post" onSubmit={this._submitChanges}>
                      <label htmlFor="newEmail">Email</label>
                      <input
                        name="newEmail"
                        value={this.props.data.email}
                        onChange={this._updateEmail}
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

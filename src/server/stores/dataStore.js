import alt from '../alt';
import DataActions from '../actions/dataActions';

class DataStore {
    constructor() {
        this.bindActions(DataActions);
        this._setUpDefaults = this._setUpDefaults.bind(this);
        this._setUpDefaults();
    }

    _setUpDefaults() {
        this.data = (this.data) ? this.data : {email: 'default email'};
    }

    onUpdateEmail(email) {
        console.log('updated email on store:  ', email);
        this.data.email = email;
    }

}

export default alt.createStore(DataStore, 'DataStore');

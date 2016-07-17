import alt from '../alt';
import DataActions from '../actions/dataActions';

class DataStore {
    constructor() {
        console.log('dataStore constructor');
        this.bindActions(DataActions);
        this._setUpDefaults = this._setUpDefaults.bind(this);
        this._setUpDefaults();
    }

    _setUpDefaults() {
        this.data = (this.data) ? this.data : {};
    }

    onUpdateEmail(email) {
        this.data.email = email;
        this.data.error = false;
    }

}

export default alt.createStore(DataStore, 'DataStore');

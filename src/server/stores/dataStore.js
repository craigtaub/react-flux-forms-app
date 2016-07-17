import alt from '../alt';
import DataActions from '../actions/dataActions';

class DataStore {
    constructor() {
        this.bindActions(DataActions);
        this._setUpDefaults = this._setUpDefaults.bind(this);
        this._setUpDefaults();
    }

    _setUpDefaults() {
        this.data = (this.data) ? this.data : {};
    }

    // request update ok
    // onUpdateEmail(email) {
    //     this.data.email = email;
    //     this.data.error = false;
    // }

    // request update error
    onUpdateEmail(email) {
        this.data.error = 'some error';
    }

}

export default alt.createStore(DataStore, 'DataStore');

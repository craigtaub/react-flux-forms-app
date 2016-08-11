import alt from '../alt';

class DataActions {
    updateEmail(email) {
        this.dispatch(email);
    }
}

export default alt.createActions(DataActions);

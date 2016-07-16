import alt from '../alt';

class DataActions {
    updateEmail(email) {
        this.dispatch(email);
    }
}
// class DataActions {}


export default alt.createActions(DataActions);

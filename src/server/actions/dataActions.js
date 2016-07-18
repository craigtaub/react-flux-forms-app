import alt from '../alt';

class DataActions {
    updateEmail(email) {
        return Promise.resolve().then(() => {
          if (email.length < 4) {
              throw new Error('something went wrong');
          } else {
              this.dispatch(email);
              return true;
          }
        })
        .catch((error) => {
            return error.message;
        })
    }
}

export default alt.createActions(DataActions);

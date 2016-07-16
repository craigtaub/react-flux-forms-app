import React, {Children, cloneElement} from 'react';
import DataStore from '../stores/dataStore';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        console.log('run parent constructor');
        this.state = DataStore.getState();
        this.onStateChange = this.onStateChange.bind(this);
    }

    renderChildren() {
        return Children.map(this.props.children, (child) => {
            return cloneElement(child, {
                data: this.state.data,
                history: this.props.history
            });
        });
    }

    componentDidMount() {
        DataStore.listen(this.onStateChange);
    }

    componentWillUnmount() {
        DataStore.unlisten(this.onStateChange);
    }

    onStateChange(dataStore) {
        this.setState(dataStore);
    }

    render() {
        return (
            <div>
                  {this.renderChildren()}
            </div>
        );
    }
}

export default Parent;

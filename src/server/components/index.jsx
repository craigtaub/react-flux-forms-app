import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log('run index constructor');
    }

    render() {
        return (
            <div className="gel-wrap">
                <div>
                    <h1 className="gel-layout__item settings-heading">
                        Welcome to index
                    </h1>
                    <p>
                        EMAIL: {this.props.data.email}
                    </p>

                    <Link to="/edit">Go to edit</Link>
                </div>
            </div>
        );
    }
}

export default Index;

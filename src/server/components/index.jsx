import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let updateMsg;
        if (this.props.location.query && this.props.location.query.updated === 'email') {
            updateMsg = <p>UPDATED EMAIL</p>;
        }
        return (
            <div className="gel-wrap">
                <div>
                    <h1 className="gel-layout__item settings-heading">
                        Welcome to index
                    </h1>
                    {updateMsg}
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

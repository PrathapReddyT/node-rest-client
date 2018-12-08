import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getProfile());
    }

    render() {
        const { user, users } = this.props;

        return (
            <div className="col-md-8 col-md-offset-2">
                {users.loading && <em>Loading...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.user &&
                    <React.Fragment>
                        <h1>Hi, {users.user.firstName}!</h1>
                        <p>You're logged as {users.user.email}!!</p>
                    </React.Fragment>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };

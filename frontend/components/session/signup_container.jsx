import { connect } from "react-redux";
import { signUp, fetchUsers, logout, login } from '../../actions/session_actions';
import SignUpModal from './signup';

const mapState = (state) => {
    return ({
        errors: state.errors.session,
        users: state.entities.users,
        formType: 'Sign Up'
    })
}

const mapDispatch = dispatch => {
    return ({
        submitForm: user => dispatch(signUp(user)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user))

    })
}

export default connect(mapState, mapDispatch)(SignUpModal);
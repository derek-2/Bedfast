import { connect } from "react-redux";
import { signUp, fetchUsers, logout } from '../../actions/session_actions';
import SessionFormModal from './session_form';

const mapState = (state) => {
    return ({
        errors: state.errors,
        users: state.users,
        formType: 'Sign Up'
    })
}

const mapDispatch = dispatch => {
    return ({
        submitForm: user => dispatch(signUp(user)),
        fetchUsers: () => dispatch(fetchUsers()),
        logout: () => dispatch(logout())

    })
}

export default connect(mapState, mapDispatch)(SessionFormModal);
import { connect } from 'react-redux';
import {login, logout} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/user_actions';
import LoginModal from './login';

const mapState = state => ({
  errors: state.errors.session,
  formType: 'Login',
  users: state.entities.users,
})

const mapDispatch = dispatch => ({
  submitForm: (user) => dispatch(login(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(LoginModal);
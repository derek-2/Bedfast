import { connect } from 'react-redux';
import { login, fetchUsers, logout} from '../../actions/session_actions';
import SessionFormModal from './session_form';

const mapState = state => ({
  errors: state.errors,
  formType: 'Login',
  users: state.entities.users,
})

const mapDispatch = dispatch => ({
  submitForm: (user) => dispatch(login(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(SessionFormModal);
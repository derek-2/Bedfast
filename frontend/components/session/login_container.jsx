import { connect } from 'react-redux';
import { login, fetchUsers, logout} from '../../actions/session_actions';
import SessionFormModal from './session_form';

const mapState = state => ({
  errors: state.errors,
  formType: 'Login'
})

const mapDispatch = dispatch => ({
  submitForm: (user) => dispatch(login(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(SessionFormModal);
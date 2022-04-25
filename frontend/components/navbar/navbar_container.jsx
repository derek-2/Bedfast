import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mapState = state => {
  console.log(state.entities.users[state.entities.session.currentUserId])
  return ({
    currentUser: state.entities.users[state.entities.session.currentUserId]
  })
}

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(NavBar);
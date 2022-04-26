import { connect } from 'react-redux';
import Menu from './menu';
import { logout } from '../../actions/session_actions';

const mapState = state => ({
    currentUser: 1
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Menu);
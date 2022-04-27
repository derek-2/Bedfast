import React from 'react';
import { connect } from 'react-redux';
import HomePage from './homepage';

const mapState = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatch = dispatch => ({

})

export default connect(mapState)(HomePage);
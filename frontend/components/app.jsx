import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch} from 'react-router-dom';
import HomePageContainer from './homepage/homepage_container';
import SignUpModal from './session/signup_container';
import LoginModal from './session/login_container';
import NewListingContainer from './listings_form/new_listing_container';
import ListingsIndexContainer from './listings_index/listing_index_container';
import ListingContainer from './listing_show/listing_container';
import ProfileContainer from './profile/profile_container';
import EditListingContainer from './listings_form/edit_listing_container';

const App = (props) => {
    const hideModal = () => {
        document.getElementById('session-modal-container').classList.toggle('hidden');
        document.getElementById('login-modal').classList.add('hidden');
        document.getElementById('signup-modal').classList.add('hidden');
    }

    return (
    <main>
        <Route component={NavBarContainer}></Route>
        <Switch>
            <Route exact path='/' component={HomePageContainer}></Route>
            <ProtectedRoute exact path='/listings/new' component={NewListingContainer}></ProtectedRoute>
            <Route exact path="/listings/search/:location/:guests" component={ListingsIndexContainer}></Route>
            <Route exact path='/listings/search/:guests' component={ListingsIndexContainer}></Route>
            <ProtectedRoute exact path='/listings/:listingId/edit' component={EditListingContainer}></ProtectedRoute>
            <Route exact path='/listings/:listingId' component={ListingContainer}></Route>
            <Route exact path='/profile/:userId' component={ProfileContainer}></Route>
        </Switch>

        {/* <Route exact path='/listings/show/:listingId' component={<ListingShowContainer />}></Route> */}
            {/* <ListingShowContainer /> */}
            {/* show page for a single listing */}
        
        <Footer />
        <div onClick={hideModal} id="session-modal-container" className="session-modal-container hidden"></div>
        <SignUpModal />
        <LoginModal />
    </main>
    )
};

export default App;
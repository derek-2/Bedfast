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

const App = (props) => {
    const hideModal = () => {
        document.getElementById('session-modal-container').classList.add('hide');
        document.getElementById(`login-modal`).classList.remove('unhide');
        document.getElementById(`signup-modal`).classList.remove('unhide');
    }

    return (
    <main>
        
        <NavBarContainer />
        <Switch>
            <Route exact path='/'>
                <div id="main">
                    <div id="top-half">
                        <div className='modals'>
                            <img className='background' src={window.background} alt="splash" />
                        </div>
                    </div>
                    <div id="bottom-half">
                <HomePageContainer />
                    </div>
                </div>
            </Route>

            <Route path='/listings/new' component={NewListingContainer}>
                
            </Route>
            <Route exact path="/listings/:city" component={ListingsIndexContainer}></Route>
        </Switch>



        {/* <Route exact path='/listings/show/:listingId' component={<ListingShowContainer />}></Route> */}
            {/* <ListingShowContainer /> */}
            {/* show page for a single listing */}
        



        <Footer />
        <div onClick={hideModal} id="session-modal-container" className="session-modal-container"></div>
        <SignUpModal />
        <LoginModal />
    </main>
    )
};

export default App;
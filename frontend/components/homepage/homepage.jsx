import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component{
    
    render(){

        return(
            <>
                <div id="main">     
                    <div id="top-half">
                        <div className='modals'>
                            <img className='background' src={window.background} alt="splash" />
                        </div>
                    </div>
                    <div id="bottom-half">
                <div className="homepage-stuff">
                    <p className="homepage-text">Inspiration for your next trip</p>
                    <ul className="inspiration-container">
                        <Link to='/listings/search/NY/1'>
                        <li className="individual-inspiration-container inspiration1">
                            <img className="inspiration-image" src={window.inspiration1} alt="inspiration1" /> 
                            <div className="inspiration-text">
                                <p>New York City</p>
                                <p>0 miles away</p>
                            </div>
                        </li>
                        </Link>
                        <Link to='/listings/search/LA/1'>
                        <li className="individual-inspiration-container inspiration2">
                            <img className="inspiration-image" src={window.inspiration2} alt="inspiration2" />
                            <div className="inspiration-text">
                                <p>Los Angeles</p>
                                <p>85 miles away</p>
                            </div>
                        </li>
                        </Link>
                        <Link to='/listings/search/ATX/1'>
                        <li className="individual-inspiration-container inspiration3">
                            <img className="inspiration-image" src={window.inspiration3} alt="inspiration3" />
                            <div className="inspiration-text">
                                <p>Austin</p>
                                <p>100 miles away</p>
                            </div>
                        </li>
                        </Link>
                        <Link to='/listings/search/MIA/1'>
                        <li className="individual-inspiration-container inspiration4">
                            <img className="inspiration-image" src={window.inspiration4} alt="inspiration4" />
                            <div className="inspiration-text">
                                <p>Miami</p>
                                <p>95 miles away</p>
                            </div>
                        </li>
                        </Link>
                    </ul>
                    <div className="questions-container">
                        <p>Questions about hosting?</p>
                        <a href="mailto:fataldigitz@gmail.com"><button className="question-btn">Ask a supervisor</button></a>
                        <img src={window.questions} alt="questions?" />
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

}
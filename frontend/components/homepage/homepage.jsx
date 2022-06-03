import React from 'react';

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
                        <li className="individual-inspiration-container inspiration1">
                            <img className="inspiration-image" src={window.inspiration1} alt="inspiration1" /> 
                            <div className="inspiration-text">
                                <p>Montauk</p>
                                <p>109 miles away</p>
                            </div>
                        </li>
                        <li className="individual-inspiration-container inspiration2">
                            <img className="inspiration-image" src={window.inspiration2} alt="inspiration2" />
                            <div className="inspiration-text">
                                <p>Kingston</p>
                                <p>85 miles away</p>
                            </div>
                        </li>
                        <li className="individual-inspiration-container inspiration3">
                            <img className="inspiration-image" src={window.inspiration3} alt="inspiration3" />
                            <div className="inspiration-text">
                                <p>Scranton</p>
                                <p>100 miles away</p>
                            </div>
                        </li>
                        <li className="individual-inspiration-container inspiration4">
                            <img className="inspiration-image" src={window.inspiration4} alt="inspiration4" />
                            <div className="inspiration-text">
                                <p>Atlantic City</p>
                                <p>95 miles away</p>
                            </div>
                        </li>
                    </ul>
                    <div className="questions-container">
                        <p>Questions about hosting?</p>
                        <button className="question-btn">Ask a supervisor</button>
                        <img src={window.questions} alt="questions?" />
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

}
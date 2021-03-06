import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Tandem from '../../images/tandem-email-logo.png'
import Circle from '../../images/circle-sketch.png'
import './StartPage.css'

function StartPage() {
    
    return (
       
        <div className="startpage">
            <a className="title-link" href="https://madeintandem.com/" target="_blank" rel="noreferrer">
                <h1 id="start-name">Trivia in </h1><img className="tandem" alt="tandem logo" src={Tandem} />
            </a>

            <div className="line">-----------------------------</div>
            
            <div className="uppercircle"></div>

            <div className="lowercircle"><img alt="" src={Circle}/></div>
            
            <div className="btns-wrap">
                <Link to='/questions'>
                    <button className="start-btns"><i className="fas fa-play-circle"></i>Begin Game</button>
                </Link>
                <a href="https://github.com/avyrie/TandemTrivia" target="_blank" rel="noreferrer"><button className="start-btns"><i className="fab fa-github"></i>Link to Github Page</button></a> 
            </div>
            
        </div>
       
    )
}
StartPage.defaultProps = {
};

export default withRouter(StartPage);



import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Pineapple from '../../images/confused.png'
import Tandem from '../../images/tandem-email-logo.png'
import './StartPage.css'

function StartPage() {
    
    return (
       
        <div className="startpage">
            <a className="title-link" href="https://madeintandem.com/" target="_blank">
                <h1 id="start-name">Trivia in </h1><img className="tandem" src={Tandem} />
            </a>
            

            <img className="pineapple" src={Pineapple} />
            
            <div className="btns-wrap">
                <Link to='/questions'>
                    <button className="start-btns"><i class="fas fa-play-circle"></i>Begin Game</button>
                </Link>
                <a href="https://github.com/avyrie/TandemTrivia"><button className="start-btns"><i class="fab fa-github"></i>Link to Github Page</button></a> 
            </div>
            
        </div>
       
    )
}
StartPage.defaultProps = {
};

export default withRouter(StartPage);



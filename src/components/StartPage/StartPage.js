import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function StartPage() {
    
    return (
       
        <div>
            <h1>This is the start page</h1>
            
            <Link to='/questions'>
                <button>Begin Game</button>
            </Link>
           <a href=""><button>Link to Github Page</button></a> 
            
        </div>
       
    )
}
StartPage.defaultProps = {
};

export default withRouter(StartPage);



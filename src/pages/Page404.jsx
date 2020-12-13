import React from 'react';
import {Link} from 'react-router-dom';
import './Page404.css';

function Page404() {
    return (
        <div className="page404">
            <h1>404</h1>
            <p>Ooops!!!</p>
            <p>That page doesn't exist or is unavailable</p>           
            
            <Link to='/' className="link-btn">Go Back to Home</Link>            
            
        </div>
    )
}

export default Page404
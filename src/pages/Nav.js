import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div>
                <p><Link to={`/home`}>Home</Link></p>
                <p><Link to={`/about`}>About</Link></p>
            </div>
        </div>
    );
};

export default Nav;

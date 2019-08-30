import React from 'react';
const Logo = () => {
    return (
        <div className="navbar-header logo">
            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                </div>
            </div>
            <a href="#"><img className="logo"  alt="" width="119" height="58"></img></a>
        </div>
    );
}

export default Logo;

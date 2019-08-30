import React from 'react';
import './style.css'
import Header from './header/header'
const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <div className="hero common-hero">
                <div className="container">
                    <div className="hero-ct">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
            <div className="page-single">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Layout;
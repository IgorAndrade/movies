import React from 'react';
import Logo from './logo';
import Menu from './menu';

const Header = () => {
    return (
        <header className="ht-header">
            <div className="container">
                <nav className="navbar navbar-default navbar-custom">
                    <Logo></Logo>
                    <Menu></Menu>
                </nav>
                <div className="top-search">
                    <select>
                        <option value="saab">Movie</option>
                        <option value="united">TV show</option>
                    </select>
                    <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"></input>
                </div>
            </div>
        </header>
    );
}
export default Header;

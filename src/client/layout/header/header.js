import React from 'react';
import Logo from './logo';
import Menu from './menu';
import SearchBar from '../../movies/components/searchbar';
const Header = () => {
    return (
        <header className="ht-header">
            <div className="container">
                <nav className="navbar navbar-default navbar-custom">
                    <Logo></Logo>
                    <Menu></Menu>
                </nav>
                <SearchBar></SearchBar>
            </div>
        </header>
    );
}
export default Header;

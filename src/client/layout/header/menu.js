import React from 'react';
import {Link} from 'react-router-dom'
const Menu = () => {
    return ( 
        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="dropdown first">
                    <Link className="btn btn-default dropdown-toggle lv1" to="/">
                        Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu level1">
                    <li>
                    <Link className="btn btn-default dropdown-toggle lv1" to="/">
                        Upcoming <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    </li>
                    </ul>
                </li>
                <li className="dropdown first">
                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                        movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu level1">
                    </ul>
                </li>
                <li className="dropdown first">
                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                        celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu level1">
                    </ul>
                </li>
                <li className="dropdown first">
                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                        news <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu level1 dropdownhover-bottom" >
                    </ul>
                </li>
                <li className="dropdown first">
                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                        community <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown-menu level1 dropdownhover-bottom" >
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menu;

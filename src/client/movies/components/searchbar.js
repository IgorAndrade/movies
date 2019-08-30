import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { SEARCH_TEST, apiSearchMovie } from '..'

const SearchBar = ({ searchText, handleInputChange, search, history, location }) => {

    let keyPress = (e) => {
        if (e.keyCode == 13 || e.charCode == 13) {
            search(searchText);
            if (location.pathname!=="/search")
                history.push("/search")
        }
    }
    return (
        <div className="top-search">
            <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                value={searchText}
                onKeyPress={keyPress}
                onChange={handleInputChange}
            ></input>
        </div >
    )
}

const mapStateToProps = state => {
    return { searchText: state.movies.searchText }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: ({ target }) => { dispatch(SEARCH_TEST(target.value)) },
        search: (text) => {
            dispatch(apiSearchMovie(text))
        },
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
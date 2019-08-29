import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Layout from '../../layout';
import { MovieList, apiSearchMovie, apiCleanSearch } from '../';
const SearchMovie = (props) => {
    useEffect(() => {
        return props.clean
    }, [])

    if (props.result.results.length < 1) {
        return (
            <Layout title="Search">Empty result!</Layout>
        )
    }

    let changePage = (page = 1) => {
        props.changePage(props.searchText, page)
    }

    return (
        <Layout title="Search">
            <div className="row ipad-width">
                <MovieList {...props.result} select={props.select} changePage={changePage} ></MovieList>
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        result: state.movies.searchResult,
        searchText: state.movies.searchText
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changePage: (searchText, page = 1) => dispatch(apiSearchMovie(searchText, page)),
        select: (movie) => {
            ownProps.history.push(`/movie/${movie.id}`)
        },
        clean: () => { dispatch(apiCleanSearch()) },
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);



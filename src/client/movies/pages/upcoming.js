import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Layout from '../../layout';
import { MovieList, apiUpcoming, selectMovie } from '../';
const Upcoming = (props) => {
    // const [result, setResult] = useState({ page: 0, results: [] });
    useEffect(props.changePage, []);

    return (
        <Layout title="upcoming">
            <div className="row ipad-width">
                <MovieList {...props.result} select={props.select} changePage={props.changePage} ></MovieList>
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return { result: state.movies.result }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changePage: (page = 1) => dispatch(apiUpcoming(page)),
        select: (movie) => {
            ownProps.history.push(`/movie/${movie.id}`)
        },
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);



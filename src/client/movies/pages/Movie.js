import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Layout from '../../layout';

const Movie = ({ movie }) => {

    return (
        <div>asdada{movie.title} </div>
    )
}

const mapStateToProps = state => {
    return { movie: state.movies.selected }
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
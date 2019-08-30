import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Moment from 'moment';

import Layout from '../../layout';
import { apiGetMovie, selectMovie } from '../'

const Movie = (props) => {
    let movie = props.movie;
    let { id } = props.match.params
    if (!id) {
        props.history.replace("/")
        return ""
    }

    useEffect(() => {
        props.getMovie(id);
        return props.clean
    }, [])

    if (!movie) {
        return (<Layout><h1>Loading...</h1></Layout>);
    }
    return (
        <Layout>
            <div className="row ipad-width2 movie_single">
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <Poster poster={movie.poster_path}></Poster>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="movie-single-ct main-content">
                        <h1 className="bd-hd">{movie.title} <span>{Moment(movie.release_date).format('YYYY')}</span></h1>
                        <Rate {...movie}></Rate>
                        <div className="movie-tabs">
                            <div className="tabs">
                                <ul className="tab-links tabs-mv">
                                    <li className="active"><a href="#overview">Overview</a></li>
                                    <li className=""><a href="#reviews"> Reviews</a></li>
                                    <li className=""><a href="#cast">  Cast &amp; Crew </a></li>
                                    <li className=""><a href="#media"> Media</a></li>
                                    <li><a href="#moviesrelated"> Related Movies</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="overview" className="tab active" >
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12 col-xs-12" style={{color:'#abb7c4'}}>
                                                {movie.overview}
                                            </div>
                                            <div className="col-md-4 col-xs-12 col-sm-12">
                                                <Detail {...movie}></Detail>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const Rate = ({ vote_average, vote_count }) => {

    return (<div className="movie-rate">
        <div className="rate">
            <i className="fa fa-star checked"></i>
            <p><span>{vote_average | 0}</span> /10<br></br>
                <span className="rv">{vote_count | 0} Reviews</span>
            </p>
        </div>
        <div className="rate-star">
            <p>Rate This Movie:  </p>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
        </div>
    </div>)
}

const Detail = (props) => {
    return (
        <>
            <div className="sb-it">
                <h6>Genres:</h6>
                <p>{props.genres.map((g, i) => { return (<span key={g.id}>{g.name}<br></br></span>) })}</p>
            </div>
            <div className="sb-it">
                <h6>Release Date:</h6>
                <p>{Moment(props.release_date).format('d MMM YYYY')}</p>
            </div>
            <div className="sb-it">
                <h6>Popularity:</h6>
                <p>{props.popularity}</p>
            </div>
            <div className="sb-it">
                <h6>IMDB</h6>
                <p>{props.imdb_id}</p>
            </div>

        </>
    )
}

const Poster = ({ poster }) => {
    const style = {
        top: 0
    }
    return (
        <div className="movie-img sticky-sb" style={style}>
            <img src={'http://image.tmdb.org/t/p/w500/' + poster} alt=""></img>
        </div>
    )
}

const mapStateToProps = state => {
    return { movie: state.movies.selected }
};
const mapDispatchToProps = dispatch => {
    return {
        getMovie: (id) => { dispatch(apiGetMovie(id)) },
        clean: () => { dispatch(selectMovie(null)) },
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

import React from 'react';
import Moment from 'moment';
const Movie = ({title,vote_average,poster_path,release_date,onClick}) =>{
    const date= Moment(release_date).format('d MMM YYYY')
    return (
        <div className="movie-item-style-2 movie-item-style-1">
            <img src={'http://image.tmdb.org/t/p/w500/'+poster_path} alt=""></img>
            <div className="hvr-inner">
                <a href="#" onClick={onClick}> Read more </a>
            </div>
            <div className="mv-item-infor">
                <h6><a href="#">{title}</a></h6>
                <p>{date}</p>
                <p className="rate"><i className="fa fa-star checked"></i><span>{vote_average}</span> /10</p>
            </div>
        </div>
    );
};

export default Movie;
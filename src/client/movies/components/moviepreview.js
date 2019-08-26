import React from 'react';
const Movie = ({title,rate,img,onClick}) =>{
    return (
        <div className="movie-item-style-2 movie-item-style-1">
            <img src={'http://image.tmdb.org/t/p/w500/'+img} alt=""></img>
            <div className="hvr-inner">
                <a href="#" onClick={onClick}> Read more </a>
            </div>
            <div className="mv-item-infor">
                <h6><a href="#">{title}</a></h6>
                <p className="rate"><i className="fa fa-star checked"></i><span>{rate}</span> /10</p>
            </div>
        </div>
    );
};

export default Movie;
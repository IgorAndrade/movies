import React from 'react';
import Movie from './moviepreview';
import ReactPaginate from 'react-paginate';
const MovieList = ({ page, total_pages, total_results, results, changePage }) => {
    return (
        <>
            <div className="flex-wrap-movielist">
                {results.map(function (m, index) {
                    return <Movie key={m.id} title={m.title} rate={m.vote_average} img={m.poster_path} onClick={() => { changePage(2) }}></Movie>;
                })}
            </div>
            <div className="topbar-filter">
                <ReactPaginate onPageChange={({selected})=>changePage(selected+1)} initialPage={0} pageCount={total_pages} pageRangeDisplayed={5} marginPagesDisplayed={5} activeLinkClassName="active"></ReactPaginate>
            </div>
        </>
    )
};

export default MovieList;
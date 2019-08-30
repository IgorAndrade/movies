import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Movie from './moviepreview';
import ReactPaginate from 'react-paginate';
const MovieList = ({ total_pages, results, changePage,select }) => {
    return (
        <>
            <div className="flex-wrap-movielist">
                {results.map(function (m, index) {
                    return <Movie key={m.id} {...m} onClick={() => { select(m) }}></Movie>;
                })}
            </div>
            <div className="topbar-filter">
                <ReactPaginate onPageChange={({ selected }) => changePage(selected + 1)} initialPage={0} pageCount={total_pages}
                    pageRangeDisplayed={3} marginPagesDisplayed={5} activeLinkClassName="active"></ReactPaginate>
            </div>
        </>
    )
};

export default MovieList;
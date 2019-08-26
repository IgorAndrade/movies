import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import { MovieList, apiUpcoming } from '../';
const Upcoming = () => {
    const [result, setResult] = useState({ page: 0, results: [] });
    console.log(result)
    const changePage = (page = 1) => {
        console.log(page);
        apiUpcoming(page).then(setResult);
    }
    useEffect(changePage, []);

    return (
        <Layout title="upcoming">
            <div className="row ipad-width">
                <MovieList {...result} changePage={changePage} ></MovieList>
            </div>
        </Layout>
    )
};

export default Upcoming;



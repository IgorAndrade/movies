import { createAction } from "redux-actions";

export const MOVIES = createAction('MOVIES');
export const SELECT = createAction('SELECT');
export const SEARCH_TEST = createAction('SEARCH_TEST');
export const SEARCH_RESULT = createAction('SEARCH_RESULT');
export function apiUpcoming(page) {
    return (dispatch) => {
        console.log("upcoming");
        fetch(`/api/movie/upcoming?page=${page}`)
            .then(res => res.json())
            .then(r => dispatch(MOVIES(r)))
    }
}

export function apiGetMovie(id) {
    return (dispatch) => {
        fetch(`/api/movie/${id}`)
            .then(res => res.json())
            .then(r => dispatch(SELECT(r)))
    }
}

export function apiSearchMovie(text, page = 1) {
    return (dispatch) => {
        if (!text || text.length < 1) {
            apiCleanSearch()(dispatch);
            return;
        }
        fetch(`/api/search/movie?query=${text}&page=${page}`)
            .then(res => res.json())
            .then(r => dispatch(SEARCH_RESULT(r)))
    }
}

export function apiCleanSearch() {
    return (dispatch) => dispatch(SEARCH_RESULT(null))
}

export function selectMovie(movie) {
    return (dispatch) => dispatch(SELECT(movie))
}
import { createAction } from "redux-actions";

export const MOVIES = createAction('MOVIES');
export const SELECT = createAction('SELECT');
export const SEARCH_TEST = createAction('SEARCH_TEST');
export const SEARCH_RESULT = createAction('SEARCH_RESULT');
export function apiUpcoming(page) {
    return (dispatch) => {
        console.log("upcoming");
        fetch(`/3/movie/upcoming?page=${page}&api_key=1f54bd990f1cdfb230adb312546d765d`)
            .then(res => res.json())
            .then(r => dispatch(MOVIES(r)))
    }
}

export function apiGetMovie(id) {
    return (dispatch) => {
        fetch(`/3/movie/${id}?api_key=1f54bd990f1cdfb230adb312546d765d`)
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
        fetch(`/3/search/movie?query=${text}&page=${page}&api_key=1f54bd990f1cdfb230adb312546d765d`)
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
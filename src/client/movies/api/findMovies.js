import { createAction } from "redux-actions";

export const MOVIES = createAction('MOVIES');
export const SELECT = createAction('SELECT');
export function upcoming(page) {
    return (dispatch) => {
        console.log("upcoming");
        fetch(`/3/movie/upcoming?page=${page}&api_key=1f54bd990f1cdfb230adb312546d765d`)
            .then(res => res.json())
            .then(r => dispatch(MOVIES(r)))
    }
}

export function selectMovie(movie) {
    return (dispatch) => dispatch(SELECT(movie))
}
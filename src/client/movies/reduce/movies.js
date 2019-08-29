import { handleActions } from "redux-actions";
import { MOVIES, SELECT, SEARCH_TEST, SEARCH_RESULT } from '..'
const init = {
    result: {
        results: []
    },
    searchText: "",
    searchResult: {
        results: []
    }
}
export default handleActions({
    [MOVIES]: (state, action) => {
        let st = Object.assign({}, state, { result: action.payload });
        return st;
    },
    [SELECT]: (state, action) => {
        let st = Object.assign({}, state, { selected: action.payload });
        return st;
    },
    [SEARCH_TEST]: (state, action) => {
        return Object.assign({}, state, { searchText: action.payload })
    },
    [SEARCH_RESULT]: (state, action) => {
        if (!action.payload) {
            return Object.assign({}, state, { searchResult: { results: [] } })
        }
        return Object.assign({}, state, { searchResult: action.payload })
    }
}, init)
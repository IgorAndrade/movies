import { handleActions } from "redux-actions";
import { MOVIES, SELECT } from '..'
const init = {
    result: { results: [] }
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
}, init)
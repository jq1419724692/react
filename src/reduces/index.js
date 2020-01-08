import {combineReducers} from "redux"
import list from "./list"
import detail from "./detail"
import user from "./user"
import book from "./book"
let reducer = combineReducers({
    list,
    detail,
    user,
    book
})
export default reducer
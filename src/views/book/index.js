import React from "react"
import {connect} from "react-redux"

import Common from "../common"
class Book extends React.Component{
    render(){
        return (
            <Common type={"BOOK_UPDATE"} url={"http://192.168.36.253:4000/mybook/list"}></Common>
        )
    }
}
export default connect(state=>state)(Book)
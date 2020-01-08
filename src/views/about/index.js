import React from "react"
import Common from "../common"
import {connect} from "react-redux"
class About extends React.Component{
    render(){
        return (
            <Common type={"ABOUT_UPDATE"} url={"http://192.168.36.253:4000/myabout/list"}></Common>
        )
    }
}
export default connect(state=>state)(About)
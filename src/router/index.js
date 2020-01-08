import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Index from "../views/index/index"
import User from "../views/user/index"
import Book from "../views/book/index"
import Detail from "../views/detail/index"
import About from "../views/about/index"
import Login from "../views/back/login"
import BackMain from "../views/back/index"
class RouterIndex extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/index/:id" component={Index}></Route>
                <Route path="/book" component={Book}></Route>
                <Route path="/user/:uid" component={User}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/back" component={BackMain}></Route>
                <Route path="/" render={
                    ()=>(
                        <Redirect to="/index/all"></Redirect>
                    )
                }></Route>
                
            </Switch>
        )
    }
}
export default RouterIndex 
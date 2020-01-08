import React from "react"
import {Menu, Icon} from "antd"
import {Link} from "react-router-dom"
class Nav extends React.Component{
    getUser(){
        if(sessionStorage.getItem("user")){
            return sessionStorage.getItem("user")
        }
    }
   
    render(){
        let {mode,id} = this.props 
        return(
            <Menu mode={mode} id={id} theme="dark">
                <Menu.Item>
                    <Link to="/index"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book"><Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about"><Icon type="info-circle" />关于</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login" style={{display:!sessionStorage.getItem("user")?"block":"none"}}><Icon type="user" />登录</Link>
                    {/* <Link to="/login" style={{display:sessionStorage.getItem("user")?"block":"none"}} onClick={this.logout()}>{this.getUser()}&nbsp;<Icon type="logout" />退出</Link> */}
                    <span  style={{display:sessionStorage.getItem("user")?"block":"none"}}>{this.getUser()}<span onClick={()=>{
                        if(window.confirm("是否退出")){
                            sessionStorage.removeItem("user")
                            window.location.href = "/index"
                        }
                    }} style={{marginLeft:"15px"}}><Icon type="logout" />退出</span></span>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/back"><Icon type="rollback" />后台</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export default Nav
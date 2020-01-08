import React from "react"
import { formateDate} from "../../utils/mydate"
import { Modal } from 'antd';
import {withRouter} from "react-router-dom"
import menuList from "../../menu/menu"
const { confirm } = Modal;
class BackHead extends React.Component{
    constructor(props){
        super(props)
        if(!sessionStorage.getItem("user")){
            window.location.href = "/"
            return
        }
        this.state = {
            current:formateDate()
        }
    }
    getMyDate(){
        this.timeId = setInterval(()=>{
            let current = formateDate()
            this.setState({current})
        },1000)
    }
    logout(){
        confirm({
            content: "确认退出？",
            onOk() {
                sessionStorage.removeItem("user")
                window.location.href = "/login"
            }
           
          });  
    }
    getTitle(){
        let path = this.props.location.pathname;
        let title = "";
        menuList.forEach(item=>{
            if(item.key === path){
                title = item.title
            }else if(item.children){
                const citem = item.children.find(val =>val.key===path)
                if(citem){
                    title += citem.title;
                }
                
            }
            
        })
        return title
    }
    componentWillMount(){
        this.getMyDate()
    }
    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    render(){this.getTitle()
        let user = sessionStorage.getItem("user");
        
        
        return(
            <div className="my-header">
                <div>当前菜单：{this.getTitle()}</div>
                <div>
                    <span>时间：{this.state.current}</span>
                    <span>管理员：{user}</span>
                    <span onClick={this.logout} className="logout">退出</span>
                </div>
            </div>
        )
    }
}
export default withRouter(BackHead)
import React from "react"
import {Link} from "react-router-dom"
import { Menu, Icon } from 'antd';
import menuList from "../../menu/menu"
const { SubMenu} = Menu;
class LeftPane extends React.Component{
    
    getMenu(menuList){
        return menuList.map(item=>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key}><Link to={item.key}><Icon type={item.icon} />{item.title}</Link></Menu.Item>
                )
            }else{
                return(
                    <SubMenu
                    key={item.key}
                    title={
                        <span>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                        </span>
                    }
                    >
                    {this.getMenu(item.children)}
                    </SubMenu>
                )
            }
        })
    }
    componentWillMount(){
        this.menuInfo = this.getMenu(menuList)
    }
    render(){
        return(
            <Menu
                defaultSelectedKeys={['/back/backhome']}
                mode="inline"
            >
            
                {this.menuInfo}
            </Menu>
        )
    }
}
export default LeftPane
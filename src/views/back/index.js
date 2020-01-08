import React from "react"
import { Layout} from 'antd';
import LeftPane from "./leftpane"
import BackHead from "./backhead"
import {Switch,Route,Redirect} from "react-router-dom"
import BackHome from "./backhome/backhome"
import BackBlock from "./backinfo/backblock"
import BackFrame from "./backinfo/backframe"
import BackUser from "./users/backuser"
import BackAdd from "./users/backadd"
import Bars from "./chart/bars"
import Pie from "./chart/pie"
import Line from "./chart/line"
const {  Content, Sider } = Layout;
class BackMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
          };
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme="light">
               <LeftPane></LeftPane>
            </Sider>
            <Layout>
              <BackHead></BackHead>
              <Content style={{ margin: '0 16px' }}>
                  <Switch>
                      <Route path="/back/backhome" component={BackHome}></Route>
                      <Route path="/back/backblock" component={BackBlock}></Route>
                      <Route path="/back/backframe" component={BackFrame}></Route>
                      <Route path="/back/backuser" component={BackUser}></Route>
                      <Route path="/back/backadd" component={BackAdd}></Route>
                      <Route path="/back/bars" component={Bars}></Route>
                      <Route path="/back/pie" component={Pie}></Route>
                      <Route path="/back/line" component={Line}></Route>
                      <Route path="/back" render={
                        ()=>(
                          <Redirect to="/back/backhome"></Redirect>
                        )
                      }></Route>
                  </Switch>
              </Content>
              {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
          </Layout>
        )
    }
}
export default BackMain
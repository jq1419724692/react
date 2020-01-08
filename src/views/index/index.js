import React from "react"
import {Menu,Col,Row} from "antd"
import {Link} from  "react-router-dom"
import IndexList from "./indexlist"
class Index extends React.Component{
    render(){
       let tab = this.props.match.params.id
        return (
            
                <Row className="wrap">
                    <Col md={4}>
                        <Menu id="indexMenu">
                            <Menu.Item>
                                <Link to="/index/all">全部</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/index/good">精华</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/index/ask">问题</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/index/share">分享</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/index/job">招聘</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/index/dev">测试</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col md={20} xs={24} style={{padding:"15px"}}>
                           <IndexList tab={tab}></IndexList> 
                    </Col>
                </Row>
            
        )
    }
}
export default Index
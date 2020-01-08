import React from "react"
import {Layout,Row,Col,Divider,Button,Dropdown,Icon} from "antd"

import Nav from "./nav"
class MainHeader extends React.Component{
    render(){
        return (
            <Layout.Header>
                <Row>
                    <Col md={4} xs={24}><h2 id="logo">wanho</h2></Col>
                    <Col md={20} xs={0}  >
                        <Divider type="vertical" className="headerDivider"/>
                        <Nav mode="horizontal" id="nav"></Nav>
                    </Col>
                    <Col md={0} xs={4} className="xsPane">
                    <Dropdown overlay={<Nav mode="vertical" id="xsPaine"></Nav>} trigger={['click']}>
                        <Button><Icon type="menu" /></Button>
                    </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}
export default MainHeader
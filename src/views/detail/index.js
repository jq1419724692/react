import React from "react"
import TxtTag from "../txttag"
import { Avatar,Card,List,Tooltip} from 'antd';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
class Detail extends React.Component{
    constructor(props){
        super(props);
        let id = this.props.match.params.id;
        this.getData(id)
    }
    getData(id){
        this.props.dispatch(dispatch=>{
            axios.get(`http://192.168.36.253:4000/myinfo/one?id=${id}`).then(res=>{
                dispatch({
                    type:"DETAIL_UPDATE",
                    data:res.data.data
                })
            })
        })
    }
    render(){
        let {data} = this.props.detail;
        const title = (
            <div>
                <h1>{data.title}</h1>
                <div>
                    <TxtTag tag={data.tab}></TxtTag>
                    <Avatar src={data.avatar_url} />
                    <Link to={"/user/"+data.u_id}>{data.loginname}</Link>
                    发表于
                    <span>{data.createdate.split("T")[0]}</span>
                </div>
            </div>
        )
        const reply = (
            <Tooltip title="prompt text">
            <span>{data.reply_count}条回复</span>
        </Tooltip>
        )
        return(
            <div className="wrapper">
                <Card title={title}>
                    <p>
                        {data.content}
                    </p>
                </Card>
                <Card title={ reply}>
                
               
                <div className="demo-infinite-container">
                        <List
                            dataSource={data.reply_list}
                            renderItem={item => (
                            <List.Item key={item.replyid}>
                                <List.Item.Meta
                                avatar={
                                    <Avatar src={item.avatar_url} />
                                }
                            title={<div><Link to="/user" style={{color:"#1980ff"}} >{item.loginname}</Link>  <span style={{color:"rgba(0,0,0,0.45)"}}>发表于{item.replydate.split("T")[0]}</span></div>}
                                description={item.reply_content}
                                />
                                <div key={item.replyid}>有{item.zan}个人觉得这个回复很赞</div>
                            </List.Item>
                            )}
                        >
                           
                        </List>
                       
                    </div>
               
                </Card>

            </div>
        )
    }
}
export default connect(state=>state)(Detail)
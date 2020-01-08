import React from "react"
import {Card,Avatar,List,Skeleton} from "antd"
import {connect} from "react-redux"
import axios from "axios"
// import {Link} from "react-router-dom"
class User extends React.Component{
    constructor(props){
        super(props)
        let uid = this.props.match.params.uid;
        this.getData(uid)
    }
    getData(uid){
        this.props.dispatch(dispatch=>{
            axios.get(`http://192.168.36.253:4000/myuser/getone?id=${uid}`).then(res=>{
                dispatch({
                    type:"USER_UPDATE",
                    data:res.data.data
                })
            })
        })
    }
    render(){
        let {data,loading} = this.props.user
        return (
        <div style={{padding:"0 50px"}}>
            <Card>
              <div  className="userheader"><Avatar src={data.avatar_url} size="large"/></div>
        <div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}><span>用户名：{data.loginname}</span><span>积分：{data.points}</span><span>注册时间：{data.registdate}</span></div>
            </Card>
            <Card title="最近创建的话题" >
            <List
                    className="demo-loadmore-list"
                    loading={loading}
                    itemLayout="horizontal"
                    dataSource={data.info_list}
                    renderItem={item => (
                    <List.Item
                    
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                        <List.Item.Meta
                            avatar={
                            <Avatar src={item.avatar_url} />
                            }
                            title={<div><a href="https://ant.design" style={{marginRight:"15px"}}>{item.loginname}</a><a href="https://ant.design">{item.title}</a></div>}
                           
                        />
                        <div>最后的创建时间：{item.createdate.split("T")[0]}</div>
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </Card>
            <Card title="最近回复的话题" >
            <List
                    className="demo-loadmore-list"
                    loading={loading}
                    itemLayout="horizontal"
                    dataSource={data.reply_list}
                    renderItem={val => (
                    <List.Item
                    
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                        <List.Item.Meta
                            avatar={
                            <Avatar src={val.avatar_url} />
                            }
                            title={<a href="https://ant.design">{val.title}</a>}
                            description={val.reply_content}
                        />
                        <div>最后的发布时间：{val.replydate.split("T")[0]}</div>
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </Card>
            
          </div>
        )
    }
}
export default connect(state=>state)(User)
import React from "react"
import {connect} from "react-redux"
import axios from "axios"
import { List, Avatar, Skeleton } from 'antd';
import TxtTag from "../txttag"
import {Link} from "react-router-dom"
class IndexList extends React.Component{
    constructor(props){
        super(props)
        this.state={
          page:1,
          recordNum:0,

        }
        this.getData(this.props.tab,this.state.page)

    }
    getData(tab,page){
        axios.get(`http://192.168.36.253:4000/myinfo/num?tab=${tab}`).then(res=>{
          this.setState({
            recordNum:res.data.data.num
          })
        })
        this.props.dispatch(dispatch=>{
            axios.get(`http://192.168.36.253:4000/myinfo/list?tab=${tab}&page=${page}&limit=5`).then(res=>{
                dispatch({
                    type:"LIST_UPDATE_SUCCESS",
                    data:res.data.data
                })
            })
        })
       
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.page !== nextState.page){
          this.getData(nextProps.tab,nextState.page)
          return false
        }
        if(this.props.tab !== nextProps.tab){
          this.setState({
            page:1
          })
            this.getData(nextProps.tab,this.state.page)
            return false
        }
        return true
    }
    render(){
        let pagination={
          current:this.state.page,
          total:this.state.recordNum,
          pageSize: 5,
          onChange:(
            (current)=>{
             
              this.setState({
                page:current
              })
            }
          )
 

        }
        return(
            <List
            pagination ={pagination}
            className="demo-loadmore-list"
            loading={this.props.list.loading}
            itemLayout="horizontal"
            dataSource={this.props.list.data}
            renderItem={item => (
              <List.Item
            actions={[<a key="list-loadmore-edit" href="javascript">回复（{item.reply_count}）</a>, <a key="list-loadmore-more" href="javascript">访问（{item.visit_count}）</a>]}
              >
                <Skeleton avatar title={false} loading={this.props.list.loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.avatar_url} />
                    }
                    title={<div><TxtTag tag={item.tab}></TxtTag><Link to={"/detail/"+item.id}>{item.title}</Link></div>}
                description={<p><Link className="loginname" to={"/user/"+item.u_id}>{item.loginname}</Link> 发表于 {item.createdate.split("T")[0]}</p>}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        )
    }
}
export default connect(state=>state)(IndexList)
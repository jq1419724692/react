import React from "react"
import { Tag } from 'antd';
import {connect} from "react-redux"
class TxtTag extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tab:{
                top:{
                    name:"置顶",
                    color:"red"
                },
                share:{
                    name:"分享",
                    color:"purple"
                },
                ask:{
                    name:"问答",
                    color:"green"
                },
                good:{
                    name:"精华",
                    color:"blue"
                },
                dev:{
                    name:"测试",
                    color:"orange"
                },
                job:{
                    name:"招聘",
                    color:"magenta"
                },
            },
            
        }
    }
    render(){
        let tab = this.state.tab[this.props.tag]===undefined?"good":this.state.tab[this.props.tag]
        
        return(
            <Tag color={tab.color}>{tab.name}</Tag>
        //   <span>
        //     {
        //         this.state.tag === "top"?<Tag color="red">置顶</Tag>:
        //         (this.state.tag==="share"?<Tag color="purple">分享</Tag>:
        //         (this.state.tag==="good"?<Tag color="blue">精华</Tag>:
        //         (this.state.tag==="dev"?<Tag color="orange">测试</Tag>:
        //         (this.state.tag==="job"?<Tag color="magenta">招聘</Tag>:
        //         <Tag color="green">问答</Tag>))))
        //     }
        //  </span> 
        )
    }
}
export default connect(state=>state)(TxtTag)
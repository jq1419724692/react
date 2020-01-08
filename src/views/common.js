import React from "react"
import { Card } from 'antd'
import {connect} from "react-redux"
import axios from "axios"
class Common extends React.Component{
    constructor(props){
        super(props)
        this.getData(this.props.url,this.props.type);
    }
    getData(url,type){
        this.props.dispatch(dispatch=>{
            axios.get(url).then(res=>{
                dispatch({
                    type:type,
                    data:res.data.data
                })
            })
        })
    }
    render(){
        let {data} = this.props.book;
        console.log(data)
        return (
            <div style={{padding:"0 50px"}}>
                {
                    data.map(item=>{
                        return(
                            <Card title={item.title} key={item.id}>
                                <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                                
                            </Card>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default connect(state=>state)(Common)
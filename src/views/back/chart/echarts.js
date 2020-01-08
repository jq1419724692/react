import React from "react"
import ReactEcharts from "echarts-for-react";
import {getNum} from "../../../api/index"
class Echarts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginname:[],
            ucount:[]

        }
        this.getEcharts()
    }
    async getEcharts(){
        let res = await getNum();
        let loginname = [];
        let ucount = [];
        res.data.data.map(item=>{
            loginname.push(item.loginname)
            ucount.push(item.ucount)
            return {loginname,ucount}
        })
        this.setState({loginname,ucount})
       
    }
    getOption(){
        return {
           title: {
               text: '用户帖子数',
               x:'center',
                y:'top',
                textAlign:'left'

           },
            xAxis: {
                type: 'category',
                data: this.state.loginname
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.state.ucount,
                type: this.props.type
            }]
            
        };
    }
    render(){
        return(
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                onChartReady={this.onChartReadyCallback}
                style={{margin:'200px auto'}}
                />
           
        )
    }
}
export default Echarts
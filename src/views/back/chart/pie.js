import React from "react"
import ReactEcharts from "echarts-for-react";
import {getNum} from "../../../api/index"
class Pie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginname:[],
            userdata:[],
            

        }
        this.getEcharts()
    }
    async getEcharts(){
        let res = await getNum();
        console.log(res.data.data)
        let loginname = [];
        let userdata = []
        res.data.data.map(item=>{
            loginname.push(item.loginname)
            userdata.push({value:item.ucount,name:item.loginname})
            return {loginname,userdata}
        })
        this.setState({loginname,userdata})
    }
    getOption(){
        return {
            title: {
                text: '用户发帖数',
                left: 'center'
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 10,
                left: 'center',
                data: this.state.loginname
            },
            series: [
                {
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:this.state.userdata,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
export default Pie
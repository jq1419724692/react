import React from "react"
import { Table,Card,Button,Icon, Modal,message} from 'antd';
import {getUserList,delUser} from "../../../api/index"
import UpdateForm from "./updatefrom"
import AddUser from "./adduser"
class BackUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData:[],
            showAdd: false,
            showUpd:false,
            oneUser:{}
           
        }
        this.getUserData()
    }
    async getUserData(){
        let userList = await getUserList()
        this.setState({
            userData:userList.data.data
        })
    }
    handleOk = () => {
        this.setState({
            showAdd: false,
            showUpd: false
        });
    
      };
    handleCancel = () => {
        this.setState({
          showAdd: false,
          showUpd: false
        });
      };   
    handleUpdateRes = ()=>{
        this.getUserData();
        this.handleCancel();
    }
   
    render(){
          const columns = [
            {
              title: '编号',
              dataIndex: 'u_id',
              key: 'u_id',
            },
            {
              title: '用户名',
              dataIndex: 'loginname',
              key: 'loginname',
            },
            {
              title: '积分',
              dataIndex: 'points',
              key: 'points',
            },
            {
                title: '注册时间',
                dataIndex: 'registdate',
                key: 'registdate',
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render: (user) => <span><Button type="primary" style={{marginRight:"10px"}} onClick={()=>{
                    this.setState({
                        showUpd: true,
                        oneUser:user
                    }) 
                }}><Icon type="edit" />修改</Button><Button type="danger" onClick={async ()=>{
                    if(window.confirm("是否删除")){
                        let res = await delUser(user.u_id);
                        if(res.data.errorNo===0){
                            message.success(res.data.message)
                            // window.location.reload()
                            this.getUserData();
                        }else{
                            message.error(res.data.message)
                        }
                    }
                }}><Icon type="user-delete" />删除</Button></span>,
                
            },
          ];
        const extra = (
            <Button type="primary" onClick={()=>{
                this.setState({
                    showAdd: true
                  });
            }}><Icon type="user-add" />添加</Button>
        )
        const pagination = {
            pageSize:5,
            showQuickJumper:true
        }
        return(
            <div style={{marginTop:"20px"}}>
                <Card title="用户一览" extra={extra}>
                <Table dataSource={this.state.userData} columns={columns}  rowKey="u_id" pagination={pagination}/>
                </Card>
                <Modal
                title="添加用户"
                visible={this.state.showAdd}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <AddUser update={this.handleUpdateRes}></AddUser>
                </Modal>
                        
                <Modal
                title="修改积分"
                visible={this.state.showUpd}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <UpdateForm user={this.state.oneUser} update={this.handleUpdateRes}></UpdateForm>
                </Modal>
            </div>
        )
    }
}
export default BackUser
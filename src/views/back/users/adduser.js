import React from "react"
import { Button,Icon,Form,Input,message} from 'antd';
import {queryUser,addUser} from "../../../api/index"
class AddUser extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
           let {loginname,pass} = values;
           let res = await queryUser(loginname);
           console.log(res)
           if(res.data ===false){
                message.error("用户已存在")
           }else{
                let res = await addUser(loginname,pass)
                if(res.data.errorNo===0){
                    message.success(res.data.message)
                    this.props.update()
                }else{
                    message.error(res.data.message)
                }
           }

          
          }
        });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('loginname', {
                rules: [{ required: true, message: '请输入用户名!' }],
                // ,{min:4,message:"用户名不能少于4位"},{max:10,message:"用户名不能大于10位"},{pattern:/^[a-zA-Z0-9]+$/,message:"用户名必须由数字、字母或下划线组成"}
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('pass', {
                rules: [{ required: true, message: '请输入密码!' },],
                // {min:4,message:"密码不能少于4位"},{max:10,message:"密码不能大于10位"},{pattern:/^[a-zA-Z0-9]+$/,message:"密码必须由数字、字母或下划线组成"}
    
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
                />,
            )}
            </Form.Item>
            <Form.Item>
            
            <Button type="primary" htmlType="submit" className="login-form-button">
               添加用户
            </Button>
            </Form.Item>
        </Form>
               
         
        )
    }
}
export default Form.create({})(AddUser)
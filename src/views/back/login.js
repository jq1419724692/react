import React from "react"
import {Form, Icon, Input, Button,message } from "antd"
import {loginUser} from "../../api/index"

class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            let {loginname,pass} = values;
            let result = await loginUser(loginname,pass)
           if(result.data.errorNo === 0){
               message.success(result.data.message);
               sessionStorage.setItem("user",loginname);
               window.location.href = '/index'
           }else{
               message.error(result.data.message);
           }
          }
        });
      };
      validatorPass = (rules,value,callback)=>{
          if(!value){
              callback("密码不能为空")
          }else if(value.length<4){
              callback("密码不能少于4位")
          }else if(!/^[a-zA-Z0-9]+$/.test(value)){
              callback("密码必须由数字、字母或下划线组成")
          }else{
              callback()
              
          }
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <h1>用户登录</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('loginname', {
                        rules: [{ required: true, message: '请输入用户名!' },{min:4,message:"用户名不能少于4位"},{max:10,message:"用户名不能大于10位"},{pattern:/^[a-zA-Z0-9]+$/,message:"用户名必须由数字、字母或下划线组成"}],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('pass', {
                        // rules: [{ required: true, message: '请输入密码!' }],
                        rules: [{ validator:this.validatorPass}],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    
                    <Button type="primary" htmlType="submit" className="login-form-button">
                       登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
Login = Form.create({})(Login)
export default Login
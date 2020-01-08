import React from "react"
import { Button,Icon,Form,Input,message} from 'antd';
import {updatePoints} from "../../../api/index"
class UpdateForm extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
           let points = values.points;
           let u_id = this.props.user.u_id;
           let res = await updatePoints(u_id,points);
           if(res.data.errorNo ===0){
                message.success(res.data.message)
                this.props.update()
           }else{
                message.error(res.data.message)
           }

          
          }
        });
      };

     
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('points', {
                        initialValue:this.props.user.points,
                        rules: [{pattern:/^[0-9]+$/,message:"积分只能由数字组成"}],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入积分"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                       修改用户积分
                    </Button>
                    </Form.Item>
                </Form>
               
        )
    }
}
export default Form.create({})(UpdateForm)
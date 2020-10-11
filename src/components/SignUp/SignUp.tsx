import React from 'react';
import { Link } from "react-router-dom";
import { Input, Icon, Tooltip, Button } from 'antd';
import './SignUp.scss'
import axios from '../../config/axios'

interface ISignUpState {
  account: string,
  password: string,
  passwordConformation: string
}

class SignUp extends React.Component<any, ISignUpState> {
  constructor(props: any) {
    super(props)
    this.state = {
      account: '',
      password: '',
      passwordConformation: ''
    }
    console.log(this.props); //是一个对象，包含history，location，match
  }

  onChange = (key: keyof ISignUpState, value: string) => {
    const newState: any = {}
    newState[key] = value
    this.setState(newState)
  }

  submit = async () => {
    const { account, password, passwordConformation } = this.state;
    try {
      const response = await axios.post('sign_up/user', {
        account,
        password,
        password_confirmation: passwordConformation
      });
      this.props.history.push('/')
      console.log(response);
    } catch (e) {
      throw new Error(e)
    }
  }

  render() {
    const { account, password, passwordConformation } = this.state;
    return (
      <div className='SignUp'>
        <h1>番茄土豆闹钟注册</h1>
        <Input placeholder="请输入用户名"
          value={account}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          allowClear
          onChange={(e) => this.onChange("account", e.target.value)}
        />
        <Input.Password placeholder="请输入密码"
          value={password}
          onChange={(e) => this.onChange("password", e.target.value)}
        />
        <Input.Password placeholder="请确认密码"
          value={passwordConformation}
          onChange={(e) => this.onChange("passwordConformation", e.target.value)}
        />
        <Button className="SignUpButton"
          type="primary"
          block
          onClick={this.submit.bind(this)}>注册</Button>
        <p>
          如果你有账号，请立即<Link to='/login'>登录</Link>
        </p>
      </div>
    )
  }
}

export default SignUp;
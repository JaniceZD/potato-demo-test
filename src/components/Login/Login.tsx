import React from 'react';
import { Link } from "react-router-dom";
import { Input, Icon, Button } from 'antd';
import './Login.scss'
import axios from '../../config/axios'

interface ILoginState {
  account: string,
  password: string,
}

class Login extends React.Component<any, ILoginState> {
  constructor(props: any) {
    super(props)
    this.state = {
      account: '',
      password: '',
    }
    console.log(this.props); //是一个对象，包含history，location，match
  }

  onChange = (key: keyof ILoginState, value: string) => {
    const newState: any = {}
    newState[key] = value
    this.setState(newState)
  }

  submit = async () => {
    const { account, password } = this.state;
    try {
      const response = await axios.post('sign_in/user', {
        account,
        password
      });
      console.log(response);
      this.props.history.push('/')
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { account, password } = this.state;
    return (
      <div className='Login'>
        <h1>番茄土豆闹钟登录</h1>
        <Input placeholder="请输入用户名"
          value={account}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          allowClear
          onChange={(e) => this.onChange("account", e.target.value)}
        />
        <Input.Password placeholder="请输入密码"
          value={password}
          onChange={(e) => this.onChange("password", e.target.value)}
        />
        <Button className="LoginButton"
          type="primary"
          block
          onClick={this.submit.bind(this)}>登录</Button>
        <p>
          没有账号？请立即<Link to='/signup'>注册</Link>
        </p>
      </div>
    )
  }
}

export default Login;
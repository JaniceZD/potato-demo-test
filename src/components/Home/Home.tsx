import React from 'react';
import axios from '../../config/axios'
import { Menu, Dropdown, Icon } from 'antd';
import history from '../../config/history'
import './Home.scss'
import Todos from '../Todos/Todos'

interface IIndexState {
  user: any
}

class Home extends React.Component<any, IIndexState> {
  constructor(props: any) {
    super(props)
    this.state = {
      user: {}
    }
    console.log(this.props)
  }
  async componentWillMount() {
    await this.getMe()
  }
  getMe = async () => {
    const response = await axios.get('me');
    console.log(response);
    this.setState({
      user: response.data
    })
  }
  logout = () => {
    localStorage.setItem('x-token', '')
    history.push('/login')
  }

  render() {
    const menu = (
      <Menu className="menu">
        <Menu.Item key="0">
          个人设置
        </Menu.Item>
        <Menu.Item key="1" onClick={this.logout.bind(this)}>
          登出
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="Home">
        <header>
          <span className="logo">LOGO</span>
          <Dropdown className="dropdown" overlay={menu} trigger={['click']} placement="bottomRight">
            <span>
              {this.state.user.account} <Icon type="down" />
            </span>
          </Dropdown>
        </header>
        <main>
          <Todos></Todos>
          <div></div>
        </main>
      </div>
    )
  }
}

export default Home
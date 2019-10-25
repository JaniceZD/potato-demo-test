import React from 'react';
import { connect } from 'react-redux'
import axios from '../../config/axios'
import { Menu, Dropdown, Icon } from 'antd';
import history from '../../config/history'
import './Home.scss'
import Todos from '../Todos/Todos'
import { initTodos } from '../../redux/actions/todos'
import { initTomatoes } from '../../redux/actions/tomatoes'

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
    await this.getTodos()
    await this.getTomatoes()
  }
  getMe = async () => {
    const response = await axios.get('me');
    console.log(response);
    this.setState({
      user: response.data
    })
  }
  getTodos = async () => {
    try {
      const response = await axios.get('todos') //response 是对象，包括 data: {resources: Array(1)}
      const todos = response.data.resources.map((t: any) => ({
        ...t, ...{ editing: false }
      })) //todos 是待办事项列表
      console.log(todos)
      this.props.initTodos(todos) //返回的是{type: "INIT_TODOS", payload: Array(1)}
    } catch (error) {
      throw new Error(error)
    }
  }

  getTomatoes = async () => {
    try {
      const response = await axios.get('tomatoes')
      console.log(response)
      const tomatoes = response.data.resources
      console.log(tomatoes)
      this.props.initTomatoes(tomatoes)
    } catch (error) {
      throw new Error(error)
    }
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

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps
})

const mapDispatchToProps = {
  initTodos,
  initTomatoes
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
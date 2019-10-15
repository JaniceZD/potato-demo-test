import React from 'react';
import axios from '../../config/axios'
import { Button } from 'antd';

interface IIndexState {
  user: any
}

class Index extends React.Component<any, IIndexState> {
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
    try {
      const response = await axios.get('me');
      console.log(response);
      this.setState({
        user: response.data
      })
    } catch (error) {
      console.error(error);
    }
  }
  logout = () => {
    localStorage.setItem('x-token', '')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="Index">
        <p>
          欢迎您，{this.state.user.account}
        </p>
        <Button onClick={this.logout.bind(this)}>登出</Button>
      </div>
    )
  }
}

export default Index
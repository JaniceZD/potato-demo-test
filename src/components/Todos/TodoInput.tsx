import React from 'react';
import { connect } from 'react-redux'
import { Input, Icon } from 'antd';
import axios from '../../config/axios'
import { addTodo } from '../../redux/actions'
import './TodoInput.scss'

interface ITodoInputProps {
  addTodo: (playload: any) => any;
}

interface ITodoInputState {
  description: string;
}

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
  constructor(props: ITodoInputProps) {
    super(props)
    this.state = {
      description: ''
    }
    console.log(this.props) //{addTodo: ƒ}
  }

  addTodo = () => {
    if (this.state.description !== '') {
      this.postTodo()
    }
  }

  postTodo = async () => {
    try {
      const response = await axios.post('todos', {
        description: this.state.description
      })
      console.log(response)
      this.props.addTodo(response.data.resource)
    } catch (e) {
      throw new Error(e)
    }
    this.setState({ description: '' })
  }

  render() {
    const { description } = this.state
    const suffix = description ? <Icon type="enter" onClick={this.postTodo} /> : <span />;
    return (
      <div className="TodoInput">
        <Input placeholder="添加新任务"
          value={description}
          onPressEnter={this.addTodo}
          onChange={(e) => this.setState({ description: e.target.value })}
          suffix={suffix} />
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps
})

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
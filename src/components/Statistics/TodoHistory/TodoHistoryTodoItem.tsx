import React from 'react'
import axios from '../../../config/axios'
import dayjs from 'dayjs'
import { connect } from 'react-redux';
import { updateTodo } from "../../../redux/actions/todos";

interface ITodoHistoryTodoItemProps {
  todo: any;
  itemType: string;
  updateTodo: (payload: any) => any;
}

class TodoHistoryTodoItem extends React.Component<ITodoHistoryTodoItemProps> {
  constructor(props: ITodoHistoryTodoItemProps) {
    super(props)
  }

  updateTodo = async (params: any) => {
    try {
      const response = await axios.put(`todos/${this.props.todo.id}`, params)
      console.log(response)
      this.props.updateTodo(response.data.resource)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    let formatText
    let time
    let action
    if (this.props.itemType === 'finished') {
      formatText = 'HH:mm'
      time = this.props.todo.updated_at
      action = (
        <div className="action">
          <span onClick={() => this.updateTodo({ completed: false, updated_at: null })}>恢复</span>
          <span onClick={() => this.updateTodo({ deleted: true })}>删除</span>
        </div>
      )
    } else if (this.props.itemType === 'deleted') {
      formatText = 'YYYY年MM月DD日 HH:mm'
      time = this.props.todo.created_at
      action = (
        <div className="action">
          <span onClick={() => this.updateTodo({ deleted: false })}>恢复</span>
        </div>
      )
    }

    return (
      <div className="TodoHistoryTodoItem">
        <div className="text">
          <span className="time">{dayjs(time).format(formatText)}</span>
          <span className="description">{this.props.todo.description}</span>
        </div>
        {action}
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps
})

const mapDispatchToProps = {
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHistoryTodoItem);
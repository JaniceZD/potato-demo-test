import React from 'react';
import { connect } from 'react-redux'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { initTodos, updateTodo } from '../../redux/actions'
import axios from '../../config/axios'

class Todos extends React.Component<any> {
  constructor(props: any) {
    super(props)
    console.log(props)  //props 是 {todos: [], function initTodos(), function updateTodo()}
  }

  get unDeletedTodos() {
    return this.props.todos.filter((t: any) => !t.deleted)
  }

  get unCompletedTodos() {
    return this.unDeletedTodos.filter((t: any) => !t.completed)
  }

  get completedTodos() {
    return this.unDeletedTodos.filter((t: any) => t.completed)
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos = async () => {
    try {
      const response = await axios.get('todos')  //response 是对象，包括 data: {resources: Array(1)}
      const todos = response.data.resources.map((t: any) => ({
        ...t, ...{ editing: false }
      }))  //todos 是待办事项列表
      console.log(todos)
      this.props.initTodos(todos) //返回的是{type: "INIT_TODOS", payload: Array(1)}
    } catch (e) {
      throw new Error(e)
    }
  }

  render() {
    return (
      <div className="Todos" >
        <TodoInput />
        <div className="todoLists">
          {
            this.unCompletedTodos.map((t: any) =>
              <TodoItem key={t.id} {...t} />
            )
          }
          {
            this.completedTodos.map((t: any) =>
              <TodoItem key={t.id} {...t} />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: state.todos,
  ...ownProps
})

const mapDispatchToProps = {
  initTodos,
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
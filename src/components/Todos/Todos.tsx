import React from 'react';
import { connect } from 'react-redux'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { updateTodo } from '../../redux/actions/todos'
import './Todos.scss'

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
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
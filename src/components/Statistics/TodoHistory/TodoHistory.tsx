import React from 'react'
import { connect } from 'react-redux'
import { Tabs, Pagination } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import { format, parseISO } from 'date-fns'
import TodoHistoryTodoItem from './TodoHistoryTodoItem'

const TabPane = Tabs.TabPane;

interface ITodoHistoryProps {
  todos: any[];
}

class TodoHistory extends React.Component<ITodoHistoryProps> {
  constructor(props: ITodoHistoryProps) {
    super(props)
  }

  get finishedTodos() {
    return this.props.todos.filter(t => t.completed && !t.deleted)
  }

  get deletedTodos() {
    return this.props.todos.filter(t => t.deleted)
  }

  get dailyTodos() {
    return _.groupBy(this.finishedTodos, (todos) => {
      return format(parseISO(todos.updated_at), 'yyyy-MM-dd')
    })
  }

  get finishedDates() {
    return Object.keys(this.dailyTodos).sort((a, b) => Date.parse(b) - Date.parse(a))
  }

  get finishedTodoList() {
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return this.finishedDates.map((date: any) => {
      return (
        <div className="dailyTodos" key={date}>
          <div className="summary">
            <span className="dateTime">{dayjs(date).format('M月D日')}</span>
            <span className="week">{week[(parseInt(dayjs(date).format('d')))]}</span>
            <p className="finishedCount">完成了{this.dailyTodos[date].length}个任务</p>
          </div>
          {
            this.dailyTodos[date].map(todo =>
              <TodoHistoryTodoItem key={todo.id} todo={todo} itemType="finished" />
            )
          }
        </div>
      )
    })
  }

  render() {
    const deletedTodoList = this.deletedTodos.map(todo=>{
			return (
				<TodoHistoryTodoItem key={todo.id} todo={todo} itemType="deleted"/>
			)
		})
    return (
      <div className="TodoHistory">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="已完成的任务" key="1">
            {this.finishedTodoList}
          </TabPane>
          <TabPane tab="已删除的任务" key="2">
            {deletedTodoList}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: state.todos,
  ...ownProps
})


export default connect(mapStateToProps)(TodoHistory)
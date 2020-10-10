import React from 'react'
import { connect } from 'react-redux'
import Polygon from './Polygon'
import TodoHistory from './TodoHistory/TodoHistory'
import _ from 'lodash'
import { format } from 'date-fns'
import './Statistics.scss'

interface IStatisticsProps {
  todos: any[];
  tomatoes: any;
}

class Statistics extends React.Component<IStatisticsProps> {
  constructor(props: IStatisticsProps) {
    super(props)
  }

  get finishedTodos() {
    return this.props.todos.filter(t => t.completed && !t.deleted)
  }

  get finishedTomatoes() {
    return this.props.tomatoes.filter((t: any) => t.ended_at && t.description && !t.aborted)
  }

  get dailyTodos() {
    return _.groupBy(this.finishedTodos, (todos) => {
      return format(Date.parse(todos.updated_at), "yyyy-MM-dd")
    })
  }

  get dailyTomatoes() {
    return _.groupBy(this.finishedTomatoes, (tomatoes) => {
      return format(Date.parse(tomatoes.ended_at), 'yyyy-MM-dd')
    })
  }

  render() {
    return (
      <div className="Statistics">
        <ul>
          <li>
            <div className="title">番茄历史</div>
            <div className="graph">
              <span className="title">累计完成番茄</span>
              <span className="number">{this.finishedTomatoes.length}</span>
              <Polygon data={this.dailyTomatoes} totalFinishedCount={this.finishedTomatoes.length} />
            </div>
          </li>
          <li>
            <div className="title">任务历史</div>
            <div className="graph">
              <span className="title">累计完成任务</span>
              <span className="number">{this.finishedTodos.length}</span>
              <Polygon data={this.dailyTodos} totalFinishedCount={this.finishedTodos.length} />
            </div>
          </li>
        </ul>
        <TodoHistory />
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    todos: state.todos,
    tomatoes: state.tomatoes,
    ...ownProps
  }
};

export default connect(mapStateToProps)(Statistics);
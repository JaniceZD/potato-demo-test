import React from 'react'
import {connect} from 'react-redux'
import Polygon from './Polygon'
import TodoHistory from './TodoHistory/TodoHistory'
import _ from 'lodash'
import {format} from 'date-fns'
import './Statistics.scss'

interface IStatisticsProps {
    todos: any[];
    tomatoes: any;
}


class Statistics extends React.Component<IStatisticsProps> {
    constructor(props: IStatisticsProps) {
        super(props);
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
                <ul className="graph">
                    <li>
                        <div className="desc">
                            <span className="title">番茄历史</span>
                            <span className="subtitle">累计完成番茄</span>
                            <span className="quantity">{this.finishedTomatoes.length}</span>
                        </div>
                        <Polygon data={this.dailyTomatoes} totalFinishedCount={this.finishedTomatoes.length}/>
                    </li>
                    <li>
                        <div className="desc">
                            <span className="title">任务历史</span>
                            <span className="subtitle">累计完成任务</span>
                            <span className="quantity">{this.finishedTodos.length}</span>
                        </div>
                        <Polygon data={this.dailyTodos} totalFinishedCount={this.finishedTodos.length}/>
                    </li>
                </ul>
                <TodoHistory/>
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
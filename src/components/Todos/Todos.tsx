import {Icon, Tree} from "antd"
import React from 'react';
import axios from '../../config/axios'
import {connect} from 'react-redux'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import {editTodo, updateTodo} from '../../redux/actions/todos'
import './Todos.scss'

const {TreeNode} = Tree;

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
            <div className="Todos">
                <TodoInput/>
                <div className="todoLists">
                    {
                        this.unCompletedTodos.map((t: any) =>
                            <TodoItem key={t.id} {...t} update={this.postTodo}
                                      editTodo={this.isTodoEditable}/>
                        )
                    }
                    <Tree
                        showLine
                        switcherIcon={<Icon type="down"/>}
                    >
                        <TreeNode title="最近完成的任务" key="0-0-0-2">
                            {
                                this.completedTodos.map((t: any) => {
                                        return (
                                            <TreeNode key={`tree-${t.id}`} title={
                                                <TodoItem
                                                    key={t.id}
                                                    {...t}
                                                    update={this.postTodo}
                                                    editTodo={this.isTodoEditable}
                                                />
                                            }/>
                                        )
                                    }
                                )
                            }
                        </TreeNode>
                    </Tree>
                </div>
            </div>
        )
    }

    isTodoEditable = (id: number) => {
        this.props.editTodo(id)
    }

    postTodo = async (id: number, params: any) => {
        if (params.completed) {
            params.completed_at = new Date()
        }
        try {
            const response = await axios.put(`todos/${id}`, params)
            this.props.updateTodo(response.data.resource)
        } catch (e) {
            throw new Error(e)
        }
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    todos: state.todos,
    ...ownProps
})

const mapDispatchToProps = {
    editTodo,
    updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
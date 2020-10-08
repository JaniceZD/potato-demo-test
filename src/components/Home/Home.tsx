import React from 'react';
import {connect} from 'react-redux'
import axios from '../../config/axios'
import {Dropdown, Icon, InputNumber, Menu, Modal, notification} from 'antd';
import history from '../../config/history'
import './Home.scss'
import Todos from '../Todos/Todos'
import Tomatoes from '../Tomatoes/Tomatoes'
import Statistics from '../Statistics/Statistics'
import {initTodos} from '../../redux/actions/todos'
import {initTomatoes} from '../../redux/actions/tomatoes'

interface IIndexState {
    user: any,
    visible: boolean,
    timer: number | undefined
}

const Tomato = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_808628_b6nuh19mmf5.js",
})

const openNotification = () => {
    notification.open({
        message: '使用小提示',
        description:
            '按下回车键即可添加新的todo噢',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const openNotification1 = () => {
    notification.open({
        message: '使用小提示',
        description:
            '番茄时间结束后输入你刚才完成的事情',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const openNotification2 = () => {
    notification.open({
        message: '使用小提示',
        description:
            '双击todo列表可以编辑噢~',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

class Home extends React.Component<any, IIndexState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {},
            visible: false,
            timer: parseInt(localStorage.getItem("timer") as string)
        };
    }

    public componentDidMount(): void {
        let count = Number(localStorage.getItem("count"));
        if (count === 1) {
            openNotification2()
        }
    }

    async componentWillMount() {
        await this.getMe();
        await this.getTodos();
        await this.getTomatoes()
    }

    getMe = async () => {
        const response = await axios.get('me');
        this.setState({
            ...this.state,
            user: response.data
        })
    };
    getTodos = async () => {
        try {
            const response = await axios.get('todos') //response 是对象，包括 data: {resources: Array(1)}
            const todos = response.data.resources.map((t: any) => ({
                ...t, ...{editing: false}
            })); //todos 是待办事项列表
            this.props.initTodos(todos) //返回的是{type: "INIT_TODOS", payload: Array(1)}
        } catch (error) {
            throw new Error(error)
        }
    };

    getTomatoes = async () => {
        try {
            const response = await axios.get('tomatoes');
            const tomatoes = response.data.resources;
            this.props.initTomatoes(tomatoes)
        } catch (error) {
            throw new Error(error)
        }
    };


    logout = () => {
        localStorage.setItem('x-token', '');
        history.push('/login')
    };

    handleOk = () => {
        this.setState({
            ...this.state,
            visible: false
        });
    };

    handleCancel = () => {
        this.setState({
            ...this.state,
            visible: false
        });
    };
    showModal = () => {
        this.setState({
            ...this.state,
            visible: true,
        });
    };
    onInputValChange = (val: number | undefined) => {
        localStorage.setItem("timer", val!.toString());
        this.setState({
            ...this.state,
            timer: val
        })
        console.log("timer: ",this.state.timer)
    };

    render() {
        const menu = (
            <Menu className="menu">
                <Menu.Item key="0">
                    <span onClick={() => {
                        this.showModal()
                    }}>偏好设置&nbsp;<Icon type="setting"/></span>
                </Menu.Item>
                <Menu.Item key="1" onClick={this.logout.bind(this)}>
                    <span>退出登录&nbsp;<Icon type="logout"/></span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="Home">
                <Modal
                    title="设置一个番茄的时间"
                    visible={this.state.visible}
                    onOk={() => {this.handleOk()}}
                    onCancel={() => {this.handleCancel()}}
                >
                    <InputNumber min={1} max={100} defaultValue={parseInt(localStorage.getItem("timer") as string)}
                                 onChange={(e) => {this.onInputValChange(e)}}/> 分钟
                </Modal>
                <header>
                    <span className="logo">
                        <Tomato type={"i-Tomato"} className={"icon"} style={{fontSize: 32}}/>
                        <span className={"logoName"}>番茄土豆闹钟</span>
                    </span>
                    <Dropdown className="dropdown" overlay={menu}  placement="bottomRight">
                        <span onClick={e => e.preventDefault()}>
                            你好，{this.state.user.account} <Icon type="down"/>
                        </span>
                    </Dropdown>
                </header>
                <main>
                    <Tomatoes timer={this.state.timer}/>
                    <Todos/>
                </main>
                <Statistics/>
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
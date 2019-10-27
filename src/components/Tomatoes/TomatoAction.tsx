import React from 'react';
import axios from '../../config/axios'
import { Button, Input, Icon, Modal } from 'antd'
import CountDown from './CountDown'

interface ITomatoActionProps {
  startTomato: () => void;
  updateTomato: (payload: any) => any;
  unfishedTomato: any;
}

interface ITomatoActionState {
  description: string;
}

const { confirm } = Modal;

class TomatoAction extends React.Component<ITomatoActionProps, ITomatoActionState> {
  constructor(props: ITomatoActionProps) {
    super(props)
    this.state = {
      description: ''
    }
    console.log(props)
  }

  abortTomato = () => {
    this.updateTomato({
      aborted: true
    })
    document.title = "番茄土豆"
  }

  showConfirm = () => {
    confirm({
      title: '您目前正在一个番茄工作时间中，要放弃这个番茄吗？',
      onOk: () => {
        this.abortTomato()
      },
      onCancel() {
        console.log('取消');
      },
      cancelText: "取消",
      okText: "确定"
    });
  }

  onFinish = () => {
    this.forceUpdate()
  }

  onPressEnter = () => {
    if (this.state.description !== '') {
      this.updateTomato({
        description: this.state.description,
        ended_at: new Date()
      })
      this.setState({ description: '' })
    }
  }

  updateTomato = async (params: any) => {
    try {
      const response = await axios.put(`tomatoes/${this.props.unfishedTomato.id}`, params)
      this.props.updateTomato(response.data.resource)
    } catch (error) {
      throw new Error(error)
    }
  }


  render() {
    let html = <div />
    if (this.props.unfishedTomato === undefined) {
      html = <Button className="startTomatoButton"
        onClick={() => { this.props.startTomato() }}>开始番茄</Button>
    } else {
      const startTime = Date.parse(this.props.unfishedTomato.started_at)
      const duration = this.props.unfishedTomato.duration
      const timeNow = new Date().getTime()
      if (timeNow - startTime > duration) {
        html = (
          <div className="inputWrapper">
            <Input
              value={this.state.description}
              placeholder="你刚刚完成了什么工作?"
              onChange={e => this.setState({ description: e.target.value })}
              onPressEnter={this.onPressEnter}
            />
            <Icon type="close-circle" onClick={this.showConfirm} />
          </div>
        )
      } else if (timeNow - startTime < duration) {
        const timer = duration - timeNow + startTime
        html = (
          <div className="countDownWrapper">
            <CountDown timer={timer} duration={duration} onFinish={this.onFinish} />
            <Icon type="close-circle" onClick={this.showConfirm} />
          </div>
        )
      }
    }
    return (
      <div className="TomatoAction" >
        {html}
      </div>
    )
  }
}

export default TomatoAction

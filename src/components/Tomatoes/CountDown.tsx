import React from 'react'

interface ICountDownProps {
  timer: number;
  duration: number;
  onFinish: () => void;
}

interface IICountDownState {
  countDown: number;
}

let timerId: NodeJS.Timeout

class CountDown extends React.Component<ICountDownProps, IICountDownState> {
  constructor(props: ICountDownProps) {
    super(props)
    this.state = {
      countDown: this.props.timer
    }
  }

  componentDidMount() {
    timerId = setInterval(() => {
      const time = this.state.countDown
      this.setState({ countDown: time - 1000 })
      document.title = `${this.countDown} - 番茄土豆`
      if (time < 1000) {
        document.title = "番茄土豆"
        this.props.onFinish()
        clearInterval(timerId)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(timerId)
  }

  get countDown() {
    const min = Math.floor(this.state.countDown / 1000 / 60)
    const second = Math.floor(this.state.countDown / 1000 % 60)
    return `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
  }

  render() {
    let percent = 1 - this.state.countDown / this.props.duration
    return (
      <div className="CountDown">
        <span className="restTime">{this.countDown}</span>
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    )
  }
}

export default CountDown
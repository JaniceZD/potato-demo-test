import React from 'react';
import { format, parseISO } from 'date-fns';

interface ITomatoListProps {
  finishedTomatoes: any;
}

const TomatoItem = (props: any) => {
  return (
    <div className="TomatoItem">
      <span className="timeRange">{format(parseISO(props.started_at), 'HH:mm')} - {format(parseISO(props.ended_at), 'HH:mm')}</span>
      <span className="description">{props.description}</span>
    </div>
  )
}

class TomatoList extends React.Component<ITomatoListProps> {
  constructor(props: ITomatoListProps) {
    super(props)
    console.log(this.props)
  }

  get dates() {
    const dates = Object.keys(this.props.finishedTomatoes)  //获取键名
    return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0, 3)
  }

  render() {
    const list = this.dates.map((d: any) => {
      const tomatoes = this.props.finishedTomatoes[d]
      return (
        <div key={d} className="dailyTomatoes">
          <div className="title">
            <span className="dateTime">{format(parseISO(d), 'M月dd日')}</span>
            <span className="finishedCount">完成了{tomatoes.length}个任务</span>
          </div>
          {
            tomatoes.map((t: any) => <TomatoItem key={t.id} {...t} />)
          }
        </div>
      )
    })
    return (
      <div className="TomatoList">
        {list}
      </div>
    )
  }
}

export default TomatoList;
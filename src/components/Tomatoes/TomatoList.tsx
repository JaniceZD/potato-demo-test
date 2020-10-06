import React from 'react';
import {format} from 'date-fns';
import './TomatoList.scss'

interface ITomatoListProps {
    finishedTomatoes: any;
}

const TomatoItem = (props: any) => {
    return (
        <div className="TomatoItem">
            <span
                className="timeRange">{format(Date.parse(props.started_at), 'H:mm')} - {format(Date.parse(props.ended_at), 'H:mm')}</span>
            <span className="description">{props.description}</span>
        </div>
    )
};

class TomatoList extends React.Component<ITomatoListProps> {
    constructor(props: ITomatoListProps) {
        super(props);
        console.log(this.props)
    }

    get dates() {
        const dates = Object.keys(this.props.finishedTomatoes);  //获取键名
        return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0, 3)
    }

    render() {
        const list = this.dates.map((d: any) => {
            const tomatoes = this.props.finishedTomatoes[d];
            return (
                <div key={d} className="dailyTomatoes">
                    <div className="title">
                        <span className="dateTime">{format(Date.parse(d), 'M月dd日')}</span>
                        <span className="finishedCount">完成了 {tomatoes.length} 个番茄</span>
                    </div>
                    {
                        tomatoes.map((t: any) => <TomatoItem key={t.id} {...t} />)
                    }
                </div>
            )
        });
        return (
            <div className="TomatoList">
                {list}
            </div>
        )
    }
}

export default TomatoList;
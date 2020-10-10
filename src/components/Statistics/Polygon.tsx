import React from 'react'

interface IPolygonProps {
    totalFinishedCount: number;
    data: any;
}

class Polygon extends React.Component<IPolygonProps> {
    constructor(props: IPolygonProps) {
        super(props)
    }

    points = () => {
        const dates = Object.keys(this.props.data).sort((a, b) => Date.parse(a) - Date.parse(b));
        const firstDay = dates[0];
        if (firstDay) {
            const range = new Date().getTime() - Date.parse(firstDay);
            let finishedCount = 0;
            let finishedY = null;
            const pointsArr = dates.map(date => {
                const x = (Date.parse(date) - Date.parse(firstDay)) / range * 240;
                finishedCount += this.props.data[date].length;
                const y = (1 - (finishedCount / this.props.totalFinishedCount)) * 60;
                finishedY = y;
                return `${x}, ${y}`
            });
            return ["0,60", ...pointsArr, `240,${finishedY}`, `240, 60`].join(" ")
        } else {
            return "0,60 240,60"
        }
    };

    render() {
        return (
            <div className="Polygon">
                <svg width="100%" height="60" preserveAspectRatio="none">
                    <polygon fill="rgba(215,78,78,0.1)" points={this.points()}/>
                    <polyline fill="none" stroke="rgba(215,78,78,0.5)"
                              strokeWidth="1" points={this.points()} strokeLinecap="square"/>
                </svg>
            </div>
        )
    }
}

export default Polygon;
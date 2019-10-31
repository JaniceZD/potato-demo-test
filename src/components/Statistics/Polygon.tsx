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
    const dates = Object.keys(this.props.data)
    let finishedCount = 0
    const XRange = new Date().getTime() - Date.parse(dates[dates.length - 1])
    const YRange = dates.reduce((a, b) => this.props.data[b].length > a ? this.props.totalFinishedCount : a, 0)
    let lastXPoint = 0
    const points = dates.reduce((a, date) => {
      const x = (new Date().getTime() - Date.parse(date)) / XRange * 238
      finishedCount += this.props.data[date].length
      const y = ((this.props.totalFinishedCount - finishedCount) / YRange) * 59.5
      lastXPoint = x
      return a.concat(` ${x},${y}`)
    }, '0,59.5')
    return points.concat(` ${lastXPoint},59.5 `)
  }

  render() {
    return (
      <div className="Polygon">
        <svg width="100%" height="60" preserveAspectRatio="none">
          <polygon fill="rgba(215,78,78,0.1)" points={this.points()} />
          <polyline fill="none" stroke="rgba(215,78,78,0.5)"
            strokeWidth="1" points={this.points()} strokeLinecap="square" />
        </svg>
      </div>
    )
  }
}

export default Polygon;
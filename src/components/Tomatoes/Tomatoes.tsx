import React from 'react';
import { connect } from 'react-redux'
import { addTomato, updateTomato } from '../../redux/actions/tomatoes'
import './Tomatoes.scss'
import TomatoAction from './TomatoAction'
import TomatoList from './TomatoList'
import axios from '../../config/axios'
import _ from 'lodash'
import { format, parseISO } from 'date-fns'

interface ITomatoesProps {
  tomatoes: any[];
  addTomato: (payload: any) => any;
  updateTomato: (payload: any) => any;
}

class Tomatoes extends React.Component<ITomatoesProps> {
  constructor(props: ITomatoesProps) {
    super(props)
    console.log(props)
  }

  get unfinishedTomato() {
    return this.props.tomatoes.filter((t: any) => !t.description && !t.ended_at && !t.aborted)[0]
  }

  get finishedTomatoes() {
    const finishedTomatoes = this.props.tomatoes.filter((t: any) => t.description && t.ended_at && !t.aborted)
    const obj = _.groupBy(finishedTomatoes, (tomato) => {

      return format(parseISO(tomato.started_at), 'yyyy-MM-d')
    })
    return obj
  }

  startTomato = async () => {
    try {
      const response = await axios.post('tomatoes', { duration: 1500000 })
      console.log(response)
      this.props.addTomato(response.data.resource)
    } catch (error) {
      throw new Error(error)
    }
  }

  render() {
    return (
      <div className="Tomatoes">
        <TomatoAction
          startTomato={this.startTomato}
          unfishedTomato={this.unfinishedTomato}
          updateTomato={this.props.updateTomato}
        />
        <TomatoList finishedTomatoes={this.finishedTomatoes} />
      </div>
    )
  }

}

const mapStateToProps = (state: any, ownProps: any) => ({
  tomatoes: state.tomatoes,
  ...ownProps
})

const mapDispatchToProps = {
  addTomato,
  updateTomato
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes)



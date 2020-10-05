import React from 'react'
import { connect } from 'react-redux'

interface ITomatoHistoryProps {
  tomatoes: any[];
}

class TomatoHistory extends React.Component<ITomatoHistoryProps> {
  constructor(props: ITomatoHistoryProps) {
    super(props)
  }
}

const mapStateToProps = (state: { tomatoes: any; }, ownProps: any) => ({
  tomatoes: state.tomatoes,
  ...ownProps
});

export default connect(mapStateToProps)(TomatoHistory)



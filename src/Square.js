//  src/Square.js
import React from 'react'

export default class Square extends React.Component {
  constructor (props) {
    super(props)

    this.state = { rune: '' }
  }

  render () {
    return (
      <button
        className="square"
        onClick={() => (this.state.rune ||
        this.setState({ rune: this.props.onEmptySquareClicked(this.props.id) }))}
      >{ this.state.rune }</button>
    )
  }
}

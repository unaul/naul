/* External dependencies */
import React from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import styles from './App.scss'

const FunctionalComponent = ({ obj, className }) => {
  const { d, e, ...others } = obj
  return (
    <div className={className}>
      <div className={styles.firstLine}>
        이 문장은 파란색이면서 5까지 빨간색으로 세면 로딩 성공임
      </div>
      <div>
        {Immutable.Map(others).map(val => val).toList()}
        <div>{`${d} ${e}`}</div>
      </div>
    </div>
  )
}

FunctionalComponent.propTypes = {
  obj: React.PropTypes.shape({
    a: React.PropTypes.number,
    b: React.PropTypes.number,
    c: React.PropTypes.number,
    d: React.PropTypes.number,
    e: React.PropTypes.number,
  }),
  className: React.PropTypes.string,
}

class App extends React.Component {
  constructor() {
    super()
    this.myObj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  }

  render() {
    return (
      <div>
        <FunctionalComponent className={styles.myRedColor} obj={this.myObj} />
      </div>
    )
  }
}

export default App

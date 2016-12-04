/* External dependencies */
import React from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import styles from './Player.scss'

class Player extends React.Component {
  constructor() {
    super()
    this.aFunction = this.aFunction.bind(this)
    this.bFunction = this.bFunction.bind(this)

    this.state = {  //  state는 여기다가 초기값과 함께 정의
      a: 0,
      b: Immutable.Map(),
    }
  }

  aFunction() { //  이렇게 this를 쓰는 것들은 contructor에서 bind해주기
    return this.state
  }

  bFunction() { //  얘도 역시 this를 쓴다
    return this.aFunction() || this.props.exampleProp //  왼쪽 값이 없으면 오른쪽 값이 되는 syntax
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p style={{ opacity: 0 }}>
          위와 같은 inline styling도 가능하지만 당연히 쓰지 맙시다

          render는 필수적인 abstract function 같은 것.
          component의 최상단 tag (or component)에 적용하는 class는 가급적 이름을 wrapper로.
          styles.wrapper는 컴파일할때 Player__wrapper__A3G97D 이런식으로 변형될 예정. ( + component name + hash tag )
        </p>
      </div>
    )
  }

}

Player.propTypes = {
  exampleProp: React.PropTypes.string,  //  propTypes는 사용되는 것마다 필수로 적어주기
}

Player.defaultProps = {
  exampleProp: 'default string',  //  defaultProps도 다 적어주는게 좋겠다!
}

export default Player
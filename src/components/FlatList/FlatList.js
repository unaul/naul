/* External dependencies */
import React from 'react'
import classNames from 'classnames'
import Immutable from 'immutable'

/* Internal dependencies */
import styles from './FlatList.scss'

class FlatList extends React.Component {
  constructor() {
    super()
    this.toggleMusicList = this.toggleMusicList.bind(this)

    this.state = {
      showMusicList: false,
    }
  }

  toggleMusicList() {
    this.setState({ showMusicList: !this.state.showMusicList })
  }

  render() {
    return (
      <div className={classNames(styles.wrapper, this.props.className)}>
        <div className={classNames(styles.position, { [styles.show]: this.props.show })}>
          {
            this.props.musics.map(song => (
              <div key={song.get('track')} className={styles.song}>
                <div className={styles.track}>{song.get('track')}</div>
                <div className={styles.title}>{song.get('title')}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

FlatList.propTypes = {
  className: React.PropTypes.string,
  show: React.PropTypes.bool,
  musics: React.PropTypes.instanceOf(Immutable.List),
}

FlatList.defaultProps = {
  className: '',
  show: false,
  musics: Immutable.List(),
}

export default FlatList

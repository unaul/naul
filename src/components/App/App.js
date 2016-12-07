/* External dependencies */
import React from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import styles from './App.scss'
import AlbumViewer from '../AlbumViewer'
import Player from '../Player'
import FlatList from '../FlatList'

class App extends React.Component {
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
      <div>
        <button onClick={this.toggleMusicList} />
        <AlbumViewer />
        <Player />
        <FlatList
          classNames={styles.musicList}
          show={this.state.showMusicList}
          musics={Immutable.fromJS([
            {
              track: 1,
              title: '정말 사랑했을까',
            },
            {
              track: 2,
              title: 'My Story',
            },
            {
              track: 3,
              title: '똑같다면',
            },
            {
              track: 4,
              title: 'Home',
            },
            {
              track: 5,
              title: '정말 사랑했을까',
            },
            {
              track: 6,
              title: 'My Story',
            },
            {
              track: 7,
              title: '똑같다면',
            },
            {
              track: 8,
              title: 'Home',
            },
            {
              track: 9,
              title: '정말 사랑했을까',
            },
            {
              track: 10,
              title: 'My Story',
            },
            {
              track: 11,
              title: '똑같다면',
            },
            {
              track: 12,
              title: 'Home',
            },
            {
              track: 13,
              title: '정말 사랑했을까',
            },
            {
              track: 14,
              title: 'My Story',
            },
            {
              track: 15,
              title: '똑같다면',
            },
            {
              track: 16,
              title: 'Home',
            },
          ])} />
      </div>
    )
  }
}

export default App

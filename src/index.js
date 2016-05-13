import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBLPlQ_6chNoF9kLmeuMRqD9mdSdSZ_CCc'


// Create a new component

class App extends Component {
  constructor(prop) {
    super(prop)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'reactjs'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })

  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}


// Take this component's generated HTML and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'))


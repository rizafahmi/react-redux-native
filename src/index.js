import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBLPlQ_6chNoF9kLmeuMRqD9mdSdSZ_CCc'

// Create a new component

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


// Take this component's generated HTML and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'))


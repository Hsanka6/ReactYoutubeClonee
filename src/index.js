import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//youtube key
const API_KEY = "AIzaSyDfERKS6olOSi_ty2R7ptPYYuV3pM9gZPw"

//create some html component with JS
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       videos: [],
       selectedVideo: null
      };
      this.videoSearch('pokemon');
  }

  videoSearch(term)
  {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      //this.setState({videos: data});
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      //if it's videos instead of data
    });
  }
  render()
  {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//make component with reactdom and show on page
ReactDOM.render(<App />, document.querySelector('.container'));

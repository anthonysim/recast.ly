import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import { debounce } from 'lodash';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: exampleVideoData,
      current: exampleVideoData[0],
      options: {
        query: 'pizza',
        key: YOUTUBE_API_KEY,
        max: 5
      },
    };
    this.titleHandler = this.titleHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.delayedInput = this.delayedInput.bind(this);
  }




  componentDidMount() {
    searchYouTube(this.state.options);
  }


  titleHandler(event) {
    let clickedTitle = event.target.innerText;
    let { list } = this.state;

    let clickedVideo = list.filter(video => {
      return video.snippet.title === clickedTitle;
    });

    this.setState({ current: clickedVideo[0] });
  }

  // delayedInput = debounce(query => {
  //   () => console.log(query);
  // }, 500)

  onChangeHandler(event) {

    let input = event.target.value;
    console.log(input);
    // this.delayedInput(input);
  }



  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onChangeHandler={this.onChangeHandler} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList titleHandler={this.titleHandler} videos={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

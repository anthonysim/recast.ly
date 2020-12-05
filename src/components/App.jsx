import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

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

  }


  titleHandler(event) {
    let clickedTitle = event.target.innerText;
    let { list } = this.state;

    let clickedVideo = list.filter(video => {
      return video.snippet.title === clickedTitle;
    });
    let firstVideo = clickedVideo[0];
    this.setState({ current: firstVideo });
  }


  componentDidMount() {
    searchYouTube(this.state.options, ( items ) => {
      this.setState({
        list: items,
        current: items[0]
      });
    });
  }

  onChangeHandler(event) {
    console.log(event.target.value);
    let options = {
      query: event.target.value
    };
    searchYouTube(options, ( items ) => {
      this.setState({
        list: items,
        current: items[0]
      });
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              {this.state.list.length === 0 ? <h1>...loading</h1> : <Search onChangeHandler={this.onChangeHandler} />}
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {this.state.list.length === 0 ? <h1>...loading</h1> : <VideoPlayer video={this.state.current} />}
          </div>
          <div className="col-md-5">
            {this.state.list.length === 0 ? <h1>...loading</h1> : <VideoList titleHandler={this.titleHandler} videos={this.state.list} />}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//finished
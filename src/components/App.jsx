import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: exampleVideoData,
      current: exampleVideoData[0]
    };
    this.titleHandler = this.titleHandler.bind(this);
  }

  titleHandler (event) {
    let clickedTitle = event.target.innerText;
    let { list } = this.state;

    let clickedVideo = list.filter(video => {
      return video.snippet.title === clickedTitle;
    });

    this.setState({ current: clickedVideo[0] });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search />
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

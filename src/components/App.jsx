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
      current: ''
    };
  }

  render() {
    const titleHandler = (event) => {
      console.log('title has been clicked');
    };

    let randomIndex = Math.floor(Math.random() * this.state.list.length);

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.list[randomIndex]} />
          </div>
          <div className="col-md-5">
            <VideoList titleHandler={titleHandler} videos={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

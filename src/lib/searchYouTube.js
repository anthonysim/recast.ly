// import App from '../components/App.js';


var searchYouTube = ({ key, query, max }, callback) => {
  $.get('https://youtube.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      key: key,
      q: query,
      maxResults: max,
    })
    .done(data => {
      console.log('Success! It worked!');
      console.log(data.items);
      callback(data.items);
    })
    .fail(error => console.log('failed', error));
};
// window.searchYouTube = searchYouTube ()
//console.log(searchYouTube)
export default searchYouTube;



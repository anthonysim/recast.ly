import YOUTUBE_API_KEY from '../config/youtube.js';


var searchYouTube = ({ key = YOUTUBE_API_KEY, query = 'pizza', max = 5 }, callback) => {
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



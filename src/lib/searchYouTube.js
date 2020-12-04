import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({ key = YOUTUBE_API_KEY, query, max = 5 }, callback) => {
  console.log('key: ' + key);
  console.log('query: ' + query);
  console.log('max: ' + max);

  // $.ajax({
  //   url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=${max}&type=video&q=${query}&key=${key}`,

  //   type: 'GET',
  //   contentType: 'application/json',
  //   success: function (data, callback) {
  //     callback(data.items);
  //   },
  //   error: function (error) {
  //     console.error('failed', error);
  //   }
  // });


  // $.get('https://youtube.googleapis.com/youtube/v3/search',
  //   {
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: true
  //     key: key,
  //     q: query,
  //     maxResults: max,
  //   })
  //   .done(data => {
  //     console.log('Success! It worked!');
  // callback(data.items)
  // })
  //   .fail(error => console.log('failed', error));

  // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&videoEmbeddable=true&key=${key}`)
  //   .then(response => response.json())
  //   .then(data => console.log(data.items))
  //   .catch(err => console.log(err));

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
};


export default searchYouTube;



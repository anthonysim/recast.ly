import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({ key = YOUTUBE_API_KEY, query, max }, callback) => {

  $.ajax({
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${key}`,

    type: 'GET',

    contentType: 'application/json',

    success: function (data, callback) {
      console.log('Success! It worked!');
      callback(data.items);
    },

    error: function (error) {
      console.error('Failed to fetch information', error);
    }
  });
};

export default searchYouTube;


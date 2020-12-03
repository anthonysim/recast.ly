import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  let { query, max, key } = options;

  $.ajax({
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${key}`,
    type: 'GET',
    data: data,
    contentType: 'application/json',
    success: options,
    error: options || function (error) {
      console.error('Failed to fetch information', error);
    }
  });

};

export default searchYouTube;
// async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

// getData();

const fetch = import('node-fetch');

const url = 'https://api.themoviedb.org/3/tv/series_id/season/season_number/episode/episode_number?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY4OTQ1NDhjMTY3NjJkYTAxMDYzYTJmZmI1YjUxNyIsIm5iZiI6MTcyOTM0ODM1Mi4xODI2NjYsInN1YiI6IjY3MTNjMTE1OTlmMjJmMzI2YWFkMTQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv_OHZYBdIJq0uFSYNvdljUV3vPckQGdVJcHD76lz3c'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
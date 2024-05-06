// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY = "633099b5029cd00ba4f7e5a5cb79e51c";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?Api_key=${API_KEY}&with_networkings=213`,
    fetchTopRatedMovies: `/Movice/top_rated?api_Key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_Key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_Key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_Key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_Key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_Key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`

};
export default requests;


//const BASE_URL = "https://api.themoviedb.org/3";

// export const fetchPopularMovies = async () => {
//     const { data } = await Axios.get($\${ BASE_URL } / movie / popular$, {
//         params: {
//             api_key: API_KEY,
//             language: 'en-US',
//             page: 1,
//         },
//     });

//     return data.results;
// };
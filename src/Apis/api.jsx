const API_KEY='0ea63277d6e727022fa47ab96fa1662a'

const api={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNeflixOriginals:`/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopratedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
}
export default api
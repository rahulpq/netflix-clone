const api_key="8d9f7b7084f7e21b8c2db6ec1f1387ba";

const request={
fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${api_key}&language=en-US`,
fetchUpcomingMovies:`/movie/upcoming?api_key=${api_key}&language=en-US`,
fetchNowPlayingMovies:`/movie/now_playing?api_key=${api_key}&language=en-US`,
fetchPopularMovies:`/movie/popular?api_key=${api_key}&language=en-US`,
fetchPopularTVShows:`/tv/popular?api_key=${api_key}&language=en-US`,
fetchOnTheAirTVShows:`/tv/on_the_air?api_key=${api_key}&language=en-US`,
fetchAiringTodayTVShows:`/tv/airing_today?api_key=${api_key}&language=en-US`,}

export default request;


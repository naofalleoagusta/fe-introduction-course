const API_KEY = '55d4893bf7d244e43af2cab9c6af64de';

export const baseImgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
export const trendingMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
export const trendingTvShow = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
export const topMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const topTv = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const profitableMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const profitableTv = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

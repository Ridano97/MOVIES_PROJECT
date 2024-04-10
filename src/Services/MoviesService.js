import axios from 'axios';

class MoviesService{
    static fetchMovies(){
        return axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3")
    }

    static fetchMovieById(id){
        return axios.get("https://api.themoviedb.org/3/movie/"+ id + "?language=fr-FR&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3")
    }
}

export default MoviesService; 
import axios from 'axios';

class LastMovies{
    static fetchLastMovies(){
        return axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bd4f8fd78d5fdccbc7c41a8b5492b9b3")
    }
}

export default LastMovies; 
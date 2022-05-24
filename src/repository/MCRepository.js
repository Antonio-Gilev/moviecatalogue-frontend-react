import axios from '../custom-axios/axios';

const MCRepository = {
    fetchMovies: () => {
        return axios.get("/movies");
    },
    fetchGenres: () => {
        return axios.get("/genres")
    },
    fetchPeople: () => {
        return axios.get("/people")
    },
    getMovie: (id) => {
        return axios.get(`/movies/${id}`);
    },
    addMovie: (name, description, image, movieGenres, peopleOnMovie) => {

        return axios.post("/movies", {
            "name" : name,
            "description" : description,
            "Image" : image,
            "movieGenres" : movieGenres,
            "peopleOnMovie" : peopleOnMovie
        });
    },
    deleteMovie: (id) => {
        return axios.delete(`/movies/${id}`);
    },
    deletePerson: (id) => {
        return axios.delete(`/people/${id}`);
    },
    addPerson: (firstName, lastName, image, roles, peopleOnMovie) => {

        return axios.post("/people", {
            "firstName" : firstName,
            "lastName" : lastName,
            "Image" : image,
            "roles" : roles,
            "peopleOnMovie" : peopleOnMovie
        });
    },
    getPerson: (id) => {

        return axios.get(`/people/${id}`);
    },

}

export default  MCRepository;
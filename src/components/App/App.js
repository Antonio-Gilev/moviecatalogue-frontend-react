import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import MCRepository from "../../repository/MCRepository";
import Header from "../Header/header";
import HomePage from "../Home/homepage";
import Movies from "../Movies/MovieList/movies";
import MovieAdd from "../Movies/MovieAdd/movieAdd";
import MoviePage from "../Movies/MoviePage/moviePage";
import PeopleList from "../People/PeopleList/peopleList";
import PersonAdd from "../People/PersonAdd/personAdd";
import PersonPage from "../People/PersonPage/personPage";

class App extends Component {
    constructor(props) {
        super(props);
        debugger;

        this.state = {
            movies: [],
            genres: [],
            people: [],
            selectedMovie: {},
            selectedPerson: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <div>
                    <Routes>


                        <Route path={"/people/:id"} element={
                            <PersonPage person={this.state.selectedPerson}
                                        onSelectMovie={this.getMovie}/>
                        }/>
                        <Route path={"/people/add"} element={
                            <PersonAdd onAddPerson={this.addPerson}
                                       people={this.state.people}/>
                        }/>
                        <Route path={"/people"} element={
                            <PeopleList people={this.state.people}
                                        onDeletePerson={this.deletePerson}
                                        onSelectPerson={this.getPerson}
                                        person={this.state.selectedPerson}
                                        movies={this.state.movies}/>
                        }/>
                        <Route path={"/movies/:id"} element={
                            <MoviePage movie={this.state.selectedMovie}
                                       onSelectPerson={this.getPerson}/>
                        }/>
                        <Route path={"/movies/add"} element={
                            <MovieAdd movies={this.state.movies}
                                      people={this.state.people}
                                      genres={this.state.genres}
                                      onAddMovie={this.addMovie}/>
                        }/>
                        <Route path={"/movies"} element={
                            <Movies movies={this.state.movies}
                                    onSelectPerson={this.getPerson}
                                    onSelectMovie={this.getMovie}
                                    onDeleteMovie={this.deleteMovie}
                                    movie={this.state.selectedMovie}/>
                        }/>
                        <Route path={"/"} element={
                            <HomePage/>
                        }/>
                    </Routes>
                </div>
            </Router>
        )

    }

    componentDidMount() {
        this.loadMovies();
        this.loadGenres();
        this.loadPeople();


    }

    loadMovies = () => {
        MCRepository.fetchMovies()
            .then((data) => {
                this.setState({
                    movies: data.data
                })
            });
    }

    loadGenres = () => {
        MCRepository.fetchGenres()
            .then((data) => {
                this.setState({
                    genres: data.data
                })
            });
    }

    loadPeople = () => {
        MCRepository.fetchPeople()
            .then((data) => {
                this.setState({
                    people: data.data
                })
            });
    }

    getMovie = (id) => {
        MCRepository.getMovie(id)
            .then((data) => {
                this.setState({

                    selectedMovie: data.data
                })
            });
    }

    getPerson = (id) => {
        MCRepository.getPerson(id)
            .then((data) => {
                this.setState({

                    selectedPerson: data.data
                })
            });
    }

    addMovie = (name, description, image, movieGenres, peopleOnMovie) => {
        MCRepository.addMovie(name, description, image, movieGenres, peopleOnMovie)
            .then(() => {
                this.loadMovies();
            });
    }

    addPerson = (firstName, lastName, image, roles, peopleOnMovie) => {
        MCRepository.addPerson(firstName, lastName, image, roles, peopleOnMovie)
            .then(() => {
                this.loadPeople();
            });
    }

    deleteMovie = (id) => {
        MCRepository.deleteMovie(id)
            .then(() => {
                this.loadMovies();
            });
    }

    deletePerson = (id) => {
        MCRepository.deletePerson(id)
            .then(() => {
                this.loadPeople();
            });
    }

}


export default App;

import React, {Component} from 'react';
import MovieTerm from "../MovieTerm/movieTerm";
import {Link} from "react-router-dom";


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="container mt-5">
                <h1 className={"text-white text-center"}>Movies</h1>
                <hr className="bg-white" style={{height: "2px"}}/>
                <div className="row row-cols-3 justify-content-center ">
                    {this.props.movies.map((term) => {
                        return (
                            <MovieTerm  term={term} movie={this.props.movie} onDeleteMovie={this.props.onDeleteMovie} onSelectMovie={this.props.onSelectMovie} onSelectPerson={this.props.onSelectPerson}/>
                        );
                    })}
                </div>
                <hr className="bg-white" style={{height: "2px"}}/>
                <Link className={"btn btn-block btn-primary w-100"} to={"/movies/add"}>Add new movie</Link>
            </div>
        )
    }


}

export default Movies;
import React from "react";
import {Link} from "react-router-dom";

const MoviePage = (props) => {

    return(
        <div className="container bg-white rounded-2" style={{minHeight : "600px"}}>
            <div className="row mt-5 " >
                <div className="col-4 ms-2 mt-2">
                    <img src={props.movie.image} className="img-fluid rounded-start " alt="..."/>
                </div>
                <div className="col-5 text-center mt-5">
                    <h1 style={{fontSize : "100px"}}>{props.movie.name}</h1>
                </div>
            </div>
            <hr/>
            <div className="row mt-3 ms-3">
                <div className="col-4 ms-3">
                    <h2 className="text-center">Description</h2>
                    <p style={{textAlign: "justify"}}>{props.movie.description}</p>
                </div>
                <div className="col-2 ms-2">
                    <h2 className="text-center">Genres</h2>
                    <ul>
                        {props.movie.movieGenres?.map((term) =>
                            <li>{term.genre.name}</li>
                        )}
                    </ul>
                </div>
                <div className="col-4 ">
                    <h2 className="text-center">Cast</h2>
                    <div className="">

                        <div className="d-flex" >
                            {props.movie.peopleOnMovie?.map((term) => {
                                return(
                                    <figure className="flex-item me-2">
                                        <Link to={`/people/${term.person.id}`} onClick={() => props.onSelectPerson(term.person.id)}>
                                            <img src={term.person.image} className=" img-fluid"  alt={"..."} style={{borderRadius: "10%", width: "100px", height: "100px", objectFit: "cover"}} />
                                        </Link>
                                        <figcaption >{term.person.firstName} {term.person.lastName}</figcaption>
                                    </figure>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default MoviePage;
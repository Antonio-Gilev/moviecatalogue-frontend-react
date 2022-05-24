import React from "react";
import {Link} from "react-router-dom";

const movieTerm = (props) => {
    return(
        <div className="col">
            <div className="card mb-3" style={{maxWidth: "540px", height : "200px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.term.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.term.name}</h5>
                            {/*<p className="card-text">{props.term.description}</p>*/}
                            <p className="card-text">
                                {props.term.movieGenres?.map((i) =>
                                    <small className="text-muted d-block">{i.genre.name} </small>
                                )}

                            </p>


                            <div className="row">
                                <Link className="col btn btn-primary " onClick={() => props.onSelectMovie(props.term.id)}
                                      to={`/movies/${props.term.id}`}>Details</Link>
                                <a title={"Delete"} className={"col btn btn-danger "} onClick={() => props.onDeleteMovie(props.term.id)}>Delete</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default movieTerm;
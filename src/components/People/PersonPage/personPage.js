import React from "react";
import {Link} from "react-router-dom";

const PersonPage = (props) => {

    return(
        <div className="container bg-white rounded-2" style={{minHeight : "600px"}}>
            <div className="row mt-5 " >
                <div className="col-4 ms-2 mt-2">
                    <img src={props.person.image} className="img-fluid rounded-start " alt="..."/>
                </div>
                <div className="col-5 text-center mt-5">
                    <h1 style={{fontSize : "100px"}}>{props.person.firstName} {props.person.lastName}</h1>
                </div>
            </div>
            <hr/>
            <div className="row mt-2 ms-3">
                <div className="col-2 ">
                    <h2>Roles</h2>
                    <ul>
                        {props.person.roles?.map((term) =>
                            <li>{term.role.role}</li>
                        )}
                    </ul>
                </div>
                <div className="col-8 ">
                    <h2 className="text-center">Movies</h2>
                    <div className="text-center">
                        <div className="d-flex " >
                            {props.person.peopleOnMovie?.map((term) => {
                                return(
                                    <figure className="flex-item me-2" >
                                        <Link to={`/movies/${term.movie.id}`} onClick={() => props.onSelectMovie(term.movie.id)}>
                                            <img src={term.movie.image} className=" img-fluid"  alt={"..."} style={{borderRadius: "10%", width: "100px", height: "100px", objectFit: "cover"}} />
                                        </Link>
                                        <figcaption  >{term.movie.name}</figcaption>
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

export default PersonPage;
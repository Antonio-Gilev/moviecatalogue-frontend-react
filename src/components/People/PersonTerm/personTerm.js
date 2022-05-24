import React, {Component} from 'react';
import {Link} from "react-router-dom";

const PersonTerm = (props) => {
    return(
        <div className="col">
            <div className="card mb-3" style={{maxWidth: "540px", height : "200px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.term.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.term.firstName} {props.term.lastName}</h5>
                            {/*<p className="card-text">{props.term.description}</p>*/}
                            <p className="card-text">
                                {props.term.roles?.map((i) =>
                                    <small className="text-muted d-block">{i.role.role} </small>
                                )}
                            </p>


                            <div className="row">
                                <Link className="col btn btn-primary " onClick={() => props.onSelectPerson(props.term.id)}
                                      to={`/people/${props.term.id}`}>Details</Link>
                                <a title={"Delete"} className={"col btn btn-danger "} onClick={() => props.onDeletePerson(props.term.id)}>Delete</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonTerm;
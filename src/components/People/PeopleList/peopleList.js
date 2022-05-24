import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PersonTerm from "../PersonTerm/personTerm";




class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="container mt-5">
                <h1 className={"text-white text-center"}>People in the Industry</h1>
                <hr className="bg-white" style={{height: "2px"}}/>
                <div className="row row-cols-3 justify-content-center ">
                    {this.props.people.map((term) => {
                        return (
                            <PersonTerm  term={term} onDeletePerson={this.props.onDeletePerson}
                                         person={this.props.person} onSelectPerson={this.props.onSelectPerson}/>
                        );
                    })}
                </div>
                <hr className="bg-white" style={{height: "2px"}}/>
                <Link className={"btn btn-block btn-primary w-100"} to={"/people/add"}>Add new person</Link>
            </div>
        )
    }


}

export default PeopleList;
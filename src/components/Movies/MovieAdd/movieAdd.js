import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Col, Form } from "react-bootstrap";


const MovieAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        image: "",
        movieGenres: null,
        peopleOnMovie: null
    })

    const handleSelectChange = (e) => {
        console.log("1");
        debugger;
        updateFormData({
            ...formData,
            [e.target.name] : /*Array( */[...e.target.options].filter(o => o.selected).map(o => o.value)/*)
*/
        })
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const movieGenres = formData.movieGenres;
        const image = formData.image;
        const description = formData.description;
        const peopleOnMovie = formData.peopleOnMovie;
        debugger;
        props.onAddMovie(name, description, image, movieGenres, peopleOnMovie);
        navigate(-1);
    }




    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-5 text-end  ms-auto me-auto">
                    <form className="form" onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label className="text-white" htmlFor="name">Movie name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="Enter movie name"
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-white" htmlFor="description">Movie Description</label>
                            <input type="text"
                                   className="form-control"
                                   id="description"
                                   name="description"
                                   placeholder="Movie Description"
                                   required
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label  className="text-white" htmlFor="image">Movie Image</label>
                            <input type="text"
                                   className="form-control"
                                   id="image"
                                   name="image"
                                   placeholder="Movie Image"
                                   required
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label  className="text-white" >Movie Genres</label>
                            <select multiple={"true"} name="movieGenres" className="form-control" onChange={handleSelectChange}>
                                {props.genres.map((term) =>
                                    <option value={term.id}>{term.name}</option>
                                )}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="text-white" >People on Movie</label>
                            <select multiple={"true"} name="peopleOnMovie" className="form-control multiple" onChange={handleSelectChange}>
                                {props.people.map((term) =>
                                    <option value={term.id}>{term.firstName + " " + term.lastName}</option>
                                )}
                            </select>
                        </div>

                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>


                    </form>
                </div>
            </div>

        </div>
    )


}

export default MovieAdd;
import React from "react";
import {useNavigate} from "react-router-dom";



const PersonAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        firstName: "",
        lastName: "",
        image: "",
        roles: null,
        peopleOnMovie: null
    })

    const handleSelectChange = (e) => {

        updateFormData({
            ...formData,
            [e.target.name] : [...e.target.options].filter(o => o.selected).map(o => o.value)

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
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const image = formData.image;
        const roles = formData.roles;
        const peopleOnMovie = formData.peopleOnMovie;
        debugger;
        props.onAddPerson(firstName, lastName, image, roles, peopleOnMovie);
        navigate(-1);
    }




    return(
        <div className="container">
            <div className="row mt-5">
                <h1 className="text-center text-white">Add person</h1>
                <div className="col-md-5 text-end  ms-auto me-auto">
                    <form className="form" onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label className="text-white" htmlFor="firstName">First Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="firstName"
                                   name="firstName"
                                   required
                                   placeholder="Enter first name"
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-white" htmlFor="lastName">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="lastName"
                                   name="lastName"
                                   required
                                   placeholder="Enter last name"
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label  className="text-white" htmlFor="image">Image</label>
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
                            <label  className="text-white" >Roles</label>
                            <select multiple={"true"} name="roles" className="form-control" onChange={handleSelectChange}>
                                <option value={1}>Actor</option>
                                <option value={2}>Director</option>
                                <option value={3}>Producer</option>
                            </select>
                        </div>


                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>


                    </form>
                </div>
            </div>

        </div>
    )


}

export default PersonAdd;
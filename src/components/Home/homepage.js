import React from "react";
import Background from '../../background.jpg'
import './homepage.css'



const HomePage = () => {
    return(
        <section className="bg-dark ">
            <div className="container" >
                <div className="row mt-5" style={{height: "750px", backgroundImage: `url(${Background})`, borderRadius: "20px"}}>
                    <div className="col-5 d-flex align-items-end ">
                        <div id={"textBorder"} className="" style={{fontSize: "160px", color: "white", textShadow: "0 0 70px black" }}>
                            <p>
                                Movie
                            </p>
                            <p style={{marginTop: "-100px"}}>
                                Catalogue
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomePage;
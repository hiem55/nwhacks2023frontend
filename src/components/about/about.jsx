import React from 'react'
import './about.css'
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import axios from 'axios';
import { hasSubscribers } from 'diagnostics_channel';

const About = () => {
    function updateLocation() {
        var returnVal = prompt("Enter your location");
        axios({
            method: 'patch',
            withCredentials: false,
            url: 'http://localhost:8080/person/move',
            params: { locationId: `1`, personId: `1` },
        });
        console.log("entered location is: " + returnVal)

    }
    function subscribe() {

    }
    return (
        <section data-section="about">
            <Stack direction="horizontal" gap={2} id="button-container">
                <Button as="a" variant="primary" onClick={() => updateLocation()}>
                    Update Location

                </Button>
                <Button as="a" variant="success" onClick={() => subscribe()} >
                    Subscribe
                </Button>
            </Stack>
            <div className="container">
                <div className="typed-out">About this App</div>
            </div>
            {/*             <h5>About This Project</h5> */}
            <div className="container about_container">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                            <p>Worry about apps tracking all your location information and storing the data? <br />
                                                Our goal is to create an app that gives you full control of sharing information about your whereabouts </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
import React from 'react'
import './about.css'
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import axios from 'axios';


const About = () => {
    function updateLocation() {
        // keep querying until input is non-null
        var returnVal = prompt("Enter your location: ");
        while (!returnVal) {
            returnVal = prompt("Enter your location: ");
        }

        const input = document.getElementById("input-val")
        let userId = input.value;
        
        axios({
            method: 'patch',
            withCredentials: false,
            url: 'http://localhost:8080/person/move',
            params: { locationString: returnVal, personId: userId },
        }); 
        console.log("entered location is: " + returnVal)

    }

    function subscribeToUser() {
        // prompt for username to subscribe to
        var returnVal = prompt("Enter the username ids you would like to subscribe to: ")

        const input = document.getElementById("input-val")
        let userId = input.value;
        
        axios({
            method: 'patch',
            withCredentials: false,
            url: 'http://localhost:8080/person/subscribe',
            params: { personId: userId, subscribePersonIds: returnVal},
        });
    }

    function subscribeToLocation() {
        // prompt for username to subscribe to
        // var returnVal = prompt("Enter the lpcation you would like to subscribe to: ")

        // grab list of usernames
        var returnVal = prompt("Enter your location: ");
        while (!returnVal) {
            returnVal = prompt("Enter your location: ");
        }

        
        const input = document.getElementById("input-val")
        let userId = input.value;

        
        axios({
            method: 'patch',
            withCredentials: false,
            url: 'http://localhost:8080/location/subscribe',
            params: { personId: userId, locationStrings: returnVal},
        });

    }
    return (
        <section data-section="about" id = "page">
            <p id = "logged-in-text"><b> Current logged in user is...</b></p>
            <section id = "input-container">  
                    <input id = "input-val" placeholder="Enter ID here"
                onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
                }}
                />
            </section>
            <Stack direction="horizontal" gap={2} id="button-container">
                <Button as="a" id = "update" onClick={() => updateLocation()}>
                <b>Update Location</b>

                </Button>
                <Button as="a" id = "subscribeUser" onClick={() => subscribeToUser()} >
                    <b>Subscribe to User</b>
                </Button>
                <Button as="a" id = "subscribeLocation" onClick={() => subscribeToLocation()} >
                    <b>Subscribe to Location</b>
                </Button>
            </Stack>
            <div className="cont">
                <div className= "colorF"><b>About this App</b></div>
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
                                            <div class = "contain">
                                            <p class = "aboutP"><b>Worry about apps tracking all your location information and storing the data? <br />
                                                Our goal is to create an app that gives you full control of sharing information about your whereabouts </b></p>
                                            </div>
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
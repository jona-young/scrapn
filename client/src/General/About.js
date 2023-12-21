import { useState, useEffect } from 'react';
import LightBulb from "../img/lightbulb.png"
import Chart from "../img/chart.png"
import Dev from "../img/dev.png"
import AboutImage from "../img/about-img.png"
import './site.css';
import './template.css';

const About = () => {
    return (
        <>
            <section className="site-panel header-spacer">
                <div className="site-heading">
                    <h1 className="form-heading general-bannertext">About Us</h1>
                    <p className="form-subheading general-lightsub">A lightweight tournament draw creation tool.</p>
                </div>
            </section>
            <section className="about-transition">
                <div className="about-imagebox">
                    <img src={AboutImage} className="about-transitionimage" />
                </div>
                <div className="general-contentbox">
                    <h3 className="general-statement">We want tournaments organizers, big and small, to have the ability to host tournament draws!</h3>
                    <p className="general-contenttext">Whether you want to create a fun comeptition with friends and family or for a competitive league, our tournament web application allows you to easily create your tournaments, update matches, and display your tournaments online!</p>
                </div>
            </section>
            <section className="site-panel">
                <div className="general-contentbox">
                    <h3 className="general-statement">How to Setup a Tournament.</h3>
                    <div className="howto-items">
                        <div className="howto-content">
                            <div className="content-icon howto-numlight">
                                1
                            </div>
                            <div className="howto-item">
                                <h3 className="general-subheading howto-heading">Create a Tournament Series</h3>
                                <p className="content-lightsub howto-text">Create a new tournament series with the event name, dates, and location. This will be the container for you to store your tournaments.</p>
                            </div>
                        </div>
                        <div className="howto-content">
                            <div className="content-icon howto-numdark">
                                2
                            </div>                            
                            <div className="howto-item">
                                <h3 className="general-subheading howto-heading">Select your Tournament Series</h3>
                                <p className="content-lightsub howto-text">Your tournaments home page will reflect all of your tournament series. Choose the tournament series you want to add your tournament draws to.</p>
                            </div>
                        </div>
                        <div className="howto-content">
                            <div className="content-icon howto-numlight">
                                3
                            </div>
                            <div className="howto-item">
                                <h3 className="general-subheading howto-heading">Create a Tournament Draw</h3>
                                <p className="content-lightsub howto-text">Fill out the tournament form and you will be redirected to your tournament draw page where you can fill out matches!</p>
                            </div>
                        </div>
                        <div className="howto-content">
                            <div className="content-icon howto-numlight">
                                4
                            </div>
                            <div className="howto-item">
                                <h3 className="general-subheading  howto-heading">Update your Tournament Draw</h3>
                                <p className="content-lightsub howto-text">You can update any match with the teams, scores, winners, match location, etc!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="general-contentbox">
                    <h4 className="general-transitiontext">- SUGGESIONS ON FEATURES?</h4>
                    <h3 className="general-statement">We would love to connect and hear about features you would like implemented.</h3>
                    <div className="flex-items">
                        <div className="flex-content">
                            <img src={LightBulb} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Feature Implementation</h3>
                                <p className="content-lightsub">You know what you want, and we would like to get a better idea of what you want to improve this tool.</p>
                            </div>
                        </div>
                        <div className="flex-content">
                            <img src={Chart} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Community Updates</h3>
                                <p className="content-lightsub">We plan to add a blog sharing what we are working on with you to keep you up to date with what to expect of our service.</p>
                            </div>
                        </div>
                        <div className="flex-content">
                            <img src={Dev} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Development Updates</h3>
                                <p className="content-lightsub">We run regular maintenance and updates to ensure you are able to work in a consistent and stable environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
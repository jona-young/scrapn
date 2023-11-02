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
                    <h3 className="general-statement">We wish to enhance and ease the creation and displaying of your tournaments.</h3>
                    <p className="general-contenttext">Our tournament web application allows you to easily create your tournaments, update matches, display your tournaments online, and easily export your draws to print!</p>
                </div>
            </section>
            <section className="site-panel">
                <div className="general-contentbox">
                    <h4 className="general-transitiontext">- SUGGESIONS ON FEATURES?</h4>
                    <h3 className="general-statement">We would love to connect and hear about features you would like implemented.</h3>
                    <div className="flex-items">
                        <div className="flex-content">
                            <img src={LightBulb} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Feature Implementation</h3>
                                <p className="content-lightsub">We work with you to add new features. If you don't need it, we don't add it.</p>
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
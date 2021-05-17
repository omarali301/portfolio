
import React from 'react';
import omar from '../../../images/omar.jpg';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {

    return (
        <div className="container">
            <div className="row m-5 ">
                <Fade left> <div className="col-md-4 abImg">
                    <img src={omar} alt="" />
                </div></Fade>
                <Fade top><div className="col-md-6 abContant">
                    <h1 id="about" className="text-left about">About Me</h1>
                    <p className="justify-content-center">I have completed my M.A in Govt Azizul haque collage.
                    My keen interest in web-development has enabled me to develop a good knowledge of Html, Css,
                    Bootstraps, JavaScript, React js, Node js , Mongo DB.
                    I am student of programing hero, study in 4 month. That enhanced my technical capacity
                    and performance. However, I can assure you that I am quick learner, adaptive as well as
                    an energetic person.
                    </p>
                    <div className="row">
                        <div col-md-4>
                            <h5>Complete Web Development </h5>
                            <p>January, 2021 - till now, 2021 Programming Hero </p>
                        </div>
                        <div col-md-4>
                            <h5>Wordpress Development</h5>
                            <p>March, 2019 - Jun 2019
                            Coders trust Bangladesh
                             </p>
                        </div>
                        <div col-md-4>
                            <h5>Digital Marketing Training</h5>
                            <p>August, 2020 - November, 2020  </p>
                        </div>
                        <div col-md-4>
                            <h5>Photoshop and Graphic Design Training </h5>
                            <p>November, 2011 - February, 2012</p>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1Yk6R_E7CDukUVt5Fz2k8GPXGWacrK1Mi/view?usp=sharing" download target="_blank"> <button className="btn btn-primary mt-5">Download CV</button>
                    </a>


                </div></Fade>


            </div>
        </div>
    );
};

export default About;
import React from 'react';
import headerImg from '../../../images/webdeveloper.png';
import './HeaderSection.css';
import Zoom from 'react-reveal/Zoom';

const HeaderSection = () => {
    return (
        <div id="home" className="container header-color">
            <div className="row pt-5">
                <div className="col-md-5 spacing">
                    <h1> Hi! I am <span className="">Md Omar Ali</span></h1>
                    <p>To develop career in any recognized organization through my aptitude, hard work, enthusiasm, sincerity, diligence,
                         dedication and determination where creativity and sincerity are appreciated and flourish opportunities are available 
                         to be professional. I have completed my M.A in Govt Azizul haque collage. My keen interest in web-development has enabled
                          me to develop a good knowledge of Html, Css, Bootstraps, JavaScript, React js, Node js , Mongo DB.</p>
                         <button className="btn btn-primary"><a href="#contact"><span className="button-color">Hire Me</span></a></button>
                </div>
                <div className="col-md-6 headerImg">
                <Zoom> <img src={headerImg} alt=""/></Zoom>
                </div>
            </div>
            <hr></hr>
        </div>
        

    );
};

export default HeaderSection;
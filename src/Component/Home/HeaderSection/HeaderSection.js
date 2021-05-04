import React from 'react';
import headerImg from '../../../images/webdeveloper.png';
import './HeaderSection.css';

const HeaderSection = () => {
    return (
        <div id="home" className="container">
            <div className="row pt-5">
                <div className="col-md-5 spacing">
                    <h1> Hi! I am <span className="">Md Omar Ali</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam eaque molestiae nihil cum 
                        cumque fuga dicta ducimus, maxime et laborum dolorum delectus nobis a neque odio at commodi?
                         Quibusdam repudiandae porro inventore voluptatum, molestias ex, quidem nam eligendi rem, nobis 
                         tempore optio voluptatem. Soluta minima consequatur excepturi exercitationem asperiores.</p>
                         <button className="btn btn-primary">Hire Me</button>
                </div>
                <div className="col-md-6 headerImg">
                    <img src={headerImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
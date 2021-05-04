import React from 'react';
import omar from '../../../images/omar.jpg';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="row m-5 ">
                <div className="col-md-4 abImg">
                    <img src={omar} alt=""/>
                </div>
                <div className="col-md-6 abContant">
                    <h1 id="about" className="text-left about">About Me</h1>
                    <p className="justify-content-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nemo laborum 
                        voluptatibus nisi inventore placeat eum quaerat qui repellendus quo, alias esse 
                        reiciendis tenetur recusandae cumque doloribus iste voluptas at saepe unde impedit
                         in quidem id eaque? Fugiat, nobis iste consequatur error quisquam sint numquam 
                         libero nemo ratione repellendus dolores dolorem itaque perspiciatis dicta asperiores,
                          eum voluptatibus at quas molestias omnis sequi blanditiis officiis fugit reiciendis.
                           Animi numquam consectetur ad dolorum laborum, similique ab assumenda quas, itaque 
                           tenetur fugiat? Laboriosam repellendus aliquid, earum provident libero, incidunt 
                           perferendis, veniam corporis minus cupiditate numquam consectetur eveniet quam 
                           natus soluta commodi! Ut, sed?</p>

                          <a href="https://drive.google.com/file/d/1Yk6R_E7CDukUVt5Fz2k8GPXGWacrK1Mi/view?usp=sharing" download> <button className="btn btn-primary mt-5">Download CV</button>
                          </a>
                </div>

               
            </div>
            
        </div>
    );
};

export default About;
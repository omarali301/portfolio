import React from 'react';
import Zoom from 'react-reveal/Zoom';
import  Reactfundamental from '../../../images/Reactfundamental.png';
import Footer from '../Footer/Footer';

const Blog2 = () => {
    return (
        
        <div id="home" className="container header-color">
             {/* <Header/> */}
            <div className="row pt-5">
               
                <div className="col-md-5 spacing">
                    <h1> React fundamental concept</h1>
                    <br/>
                    <p>Firstly I have described that react will build the original UI on our behalf, in web browser. Working the DOM API is hard. React give developer to work with a “virtual browser” that is more amiable than the genuine browser. React fundamentally acts like your representative who will do the correspondence with the DOM for your behalf.
React components are reusable, stateful and compassable we have created a component and make all components in a one-component add and some components we reuse in many components.
Now we let’s discuss about benefits of components. The term component use many framework or library. We can write components by HTML5 feature and custom element. It’s make easy to readable and easy concept.
Lets;t talk about virtual DOM in React. I am trying to discuss about virtual DOM it will change each time since as tree structure in quick.
and React props it makes document pass in a another component it runs for need to install so this is installed code ‘npm install — save prop-types’
Summary finely we decide to React is awesome for the programming framework we can use easily to HTML5.</p>
                  
                </div>
                <div className="col-md-6 headerImg">
                <Zoom> <img style={{height:'300px'}}src={Reactfundamental} alt=""/></Zoom>
                </div>
            </div>
            <hr></hr>
            <Footer/>
        </div>
    );
};

export default Blog2;
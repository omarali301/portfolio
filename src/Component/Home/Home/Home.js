import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderSection from '../HeaderSection/HeaderSection';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div className="container-fluid  bg-color">
            <Header/>
            <HeaderSection/>
            <About/>
            <Service/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
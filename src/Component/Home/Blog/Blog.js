import React from 'react';
import cart8 from '../../../images/cart8.jpg';
import cart9 from '../../../images/cart9.jpg';
import cart10 from '../../../images/cart10.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div id="blog" className="container">

  <h1 id="blog" className="m-5 text-center">My Blog</h1>
<div class="row row-cols-1 row-cols-md-3 g-4 ps-5">
  <div class="col">
    <div class="card h-100">
      <img src={cart8} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">10 JavaScript question and answer</h5>
        <p class="card-text">Today I will discuss about 10 JavaScript question and answer
Now let’s get’s started.</p>
      </div>
      <div class="card-footer">
         <button className="btn btn-primary"> <Link to="Blog1" target="_blank"><span className="button-color">Read More</span></Link></button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart9} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React fundamental concept</h5>
        <p class="card-text">Firstly I have described that react will build the original UI on our behalf, in web browser. Working the DOM API is hard. React give developer to work</p>
      </div>
      <div class="card-footer">
         <button className="btn btn-primary"> <Link to="Blog2" target="_blank"><span className="button-color">Read More</span></Link></button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart10} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Re-Introduce javascript</h5>
        <p class="card-text">JavaScript is a powerful language, it use highly profile application showing that deeper knowledge of this technology is an important skill for any web</p>
      </div>
      <div class="card-footer">
       <button className="btn btn-primary"> <Link to="Blog3" target="_blank"><span className="button-color">Read More</span></Link></button>
      </div>
    </div>
  </div>
  </div>

        </div>

    );
};

export default Blog;
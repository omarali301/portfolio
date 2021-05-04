import React from 'react';
import cart8 from '../../../images/cart8.jpg';
import cart9 from '../../../images/cart9.jpg';
import cart10 from '../../../images/cart10.jpg';

const Blog = () => {
    return (
        <div id="blog" className="container">

  <h1 id="blog" className="m-5 text-center">My Blog</h1>
<div class="row row-cols-1 row-cols-md-3 g-4 ps-5">
  <div class="col">
    <div class="card h-100">
      <img src={cart8} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blog for html</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart9} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blog for css</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart10} class="card-img-top p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blog for javascript</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  </div>
        </div>
    );
};

export default Blog;
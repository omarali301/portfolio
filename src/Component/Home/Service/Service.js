import React from 'react';
import cart1 from '../../../images/cart1.jpg';
import cart2 from '../../../images/cart2.jpg';
import cart3 from '../../../images/cart3.jpg';
import cart4 from '../../../images/cart4.jpg';
import cart5 from '../../../images/cart5.jpg';
import cart6 from '../../../images/cart6.jpg';

const Service = () => {
    return (
        <div className="container">
        <h1 id="service" className="text-center m-5">Service</h1>
<div class="row row-cols-1 row-cols-md-3 g-4 ps-5">
<div class="col">
  <div class="card h-100">
    <img src={cart1} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">panda website</h5>
      <p class="card-text">This is panda website which I try to do E-commerce website create and it;s just sample of work for me</p>
    </div>
    <div class="card-footer">
     <button className="btn btn-primary"><a href="https://omarali301.github.io/fourth-project/" target="_blank"><span className="button-color">Panda website</span></a></button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src={cart2} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Ticket Flights</h5>
      <p class="card-text">This is tickets buy website which I try to do buy ticket and it;s just sample of work for me</p>
    </div>
    <div class="card-footer">
    <button className="btn btn-primary"><a href="https://omarali301.github.io/Discover-Fly/" target="_blank"><span className="button-color">Booking flight</span></a></button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src={cart4} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">International cricket team</h5>
      <p class="card-text">International cricket Team website which I have use sports api and here a button which click you can see full details</p>
    </div>
    <div class="card-footer">
       <button className="btn btn-primary"><a href="https://omarali301.github.io/third-website/" target="_blank"><span className="button-color">Feature App</span></a></button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src={cart3} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">service provider</h5>
      <p class="card-text">This is a clipping service provider which give the service various price </p>
    </div>
    <div class="card-footer">
       <button className="btn btn-primary"><a href="https://omarali301.github.io/Sajid-Bank/" target="_blank"><span className="button-color">Deposit Bank</span></a></button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src={cart5} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">amazon shopping</h5>
      <p class="card-text">Emazon This is a ecommerce website which I try to full backend and frontend here ar buy button you can choose more product and pay by card</p>
    </div>
    <div class="card-footer">
       <button className="btn btn-primary"><a href="https://competent-colden-23d505.netlify.app/" target="_blank"><span className="button-color">Cricket Team</span></a></button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src={cart6} class="card-img-top p-3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">city travel</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
       <button className="btn btn-primary"><a href="https://photoservices-3bf46.web.app/" target="_blank"><span className="button-color">photoEditing website</span></a></button>
    </div>
  </div>
</div>
</div>
          
      </div>
    );
};

export default Service;
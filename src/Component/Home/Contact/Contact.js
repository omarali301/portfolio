import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container mt-5">

        <div className="row m-5">
          <h1 id="contact" className="m-5 text-center">Contact</h1>
          <div className="col-md-6">
          <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Name</label>
          <input type="name" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"200px"}}></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      
          </div>
          <div className="col-md-4 address">
            <div className="addressC">
            <p>Address: New adarshopara, House : 161, shapla chattor , Rangpur</p>
            <p>Email: omarali301@gmail.com</p>
            </div>
          </div>
      
                  
      </div>
      
      
      
              </div>
    );
};

export default Contact;
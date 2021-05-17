import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_409oic6', 'template_kpxkog6', e.target, 'user_XIFRrkKbfAfbD1gTVrq7G')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();

  }

  return (
    <div className="container mt-5">

      <div className="row m-5">
        <h1 id="contact" className="m-5 text-center">Contact</h1>
        <div className="col-md-6">

        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input type="submit" className="btn btn-info" value="Send Message"></input>
              </div>
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
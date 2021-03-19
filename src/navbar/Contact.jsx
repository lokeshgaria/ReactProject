import React, { useState } from 'react';

const Contact = () => {
  const [formdata, setdata] = useState({

    fname: "",
    phone: "",
    email: "",
    message: ""

  });
  const inputValue = (event) => {
    const { value, name } = event.target;

    setdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const submit = (e) => {
    e.preventDefault();
    alert(`Hello ${formdata.fname} your phone number ${formdata.phone} ,your email  ${formdata.email} and your message ${formdata.message} is succesfully submitted Thankyou`);
  }
  return (
    <>
      <section className="bg-light">
        <div className="py-5">
          <h1 className="text-center   muli">Contact Us</h1>

         
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10  col-lg-5 muli  mx-auto">
              <form onSubmit={submit} method="post" >
                <div className="mb-3">
                  <label className="form-label ">Your Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" required name="fname" value={formdata.name} onChange={inputValue} placeholder=" Enter Your Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" required name="phone" value={formdata.phone} onChange={inputValue} placeholder="Enter Phone Number" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" required name="email" value={formdata.email} onChange={inputValue} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" name="message" value={formdata.message} onChange={inputValue} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary font-weight-bold">Submit</button>
              </form>
            </div>
          </div>
        </div>

    </div>
    </section>
      
    </>
  )
}

export default Contact;
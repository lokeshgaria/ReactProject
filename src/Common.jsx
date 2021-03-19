import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex bg-light align-items-center muli">
        <div className=" container-fluid ">
          <div className="row  ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="text-capitalize">{props.name} <strong className="brand-name">React Project</strong></h1>
                  <h2 className="my-3 text-capitalize">
                    this website is still under development
              </h2>
                  <div className="mt-3">
                    <NavLink to={props.linkto} className="btn   btn-getstarted">{props.btnName}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 ">
                  <img src={props.imgsrc} alt="name" className="home-img animate" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Common;
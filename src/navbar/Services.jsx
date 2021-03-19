import React from 'react';
import sdata from '../sdata.jsx'
import Card from '../Card.jsx';
const Services = () => {
  return (
    <>
    <section className="bg-light">
    <div className="py-5">
        <h1 className="text-center muli">Our services</h1>

      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              {
                sdata.map((value, indx) => {
                  return <Card title={value.title} imgsrc={value.imgsrc} key={indx} />
                })
              }
            </div>
          </div>
        </div>
      </div>

    </section>
     
    </>
  )
}

export default Services;
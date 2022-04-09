import React from 'react';
import Card from './component/Card';
import CardData from './component/CardData';

const Service = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-8 py-5 mx-auto text-center">
              <h4>Services</h4>
              <h1>Our Service</h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                culpa quia accusantium, quisquam totam vero suscipit. At non
                reiciendis harum, nam vel vero, odit distinctio nihil sit quam
                culpa ratione?
              </p>
            </div>
          </div>

          <div className="row g-4 mt-3">
            {CardData.map((val, ind) => {
              return <Card 
                      key={ind} 
                      title={val.title} 
                      quotes={val.quotes} 
                      icon={val.con}       
                      />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

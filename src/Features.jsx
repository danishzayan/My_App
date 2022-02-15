import React from 'react';
import SVG from './component/images/features-img.svg';

const Features = () => {
  return (
    <>
      <section className="row w-100 px-5 py-5" id="features">
        <div className="col-lg-6 col-md-6">
          <img src={SVG} className="img-fluid py-4" alt="" />
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h4>Why to choose us?</h4>
                <h1>Best solution for your business</h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi culpa quia accusantium, quisquam totam vero suscipit.
                  At non reiciendis harum, nam vel vero, odit distinctio nihil
                  sit quam culpa ratione?
                </p>

                <ul className="list-group pt-3">
                  <li
                    className="list-group-item active active-item"
                    aria-current="true"
                  >
                    An active item
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

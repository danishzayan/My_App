import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div class="background vh-100 d-flex align-items-center" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h1 class="display-4 text-white">
                Every type of App <br /> is Very useful
              </h1>
              <p class="text-white my-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptates reiciendis harum error fugit voluptatum ea aliquid ex
                cumque consequuntur dolores vitae magni excepturi et!
              </p>
              <NavLink to="/service">
                <button class="button btn-1 text-white me-4">
                  Get Started
                </button>
              </NavLink>
              <button class="button btn-2 text-white">Play Store</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

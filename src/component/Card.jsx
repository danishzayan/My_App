import react from 'react';
import CardData from './CardData';
const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="card-box">
          <div className="icon">
            <i className="bi bi-briefcase-fill"></i>
          </div>
          <h5 className="mt-4 mb-2">{props.title}</h5>
          <p>{props.quotes}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

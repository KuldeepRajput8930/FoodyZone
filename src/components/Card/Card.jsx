import React from 'react'
import './Card.css'
import  PropTypes from 'prop-types';

function Card({image}) {
    return (
        <div className='card'>
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <span className="recepie_name">Boiled Egg</span>
                <p className="descreption">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis aspernatur</p>
            <button className="purchase_btn">$10.00</button>
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.string
  }
export default Card

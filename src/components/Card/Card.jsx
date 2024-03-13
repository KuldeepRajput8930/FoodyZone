import './Card.css'
import PropTypes from 'prop-types';

function Card({ image, name, description, price }) {
    return (
        <div className='card'>
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <span className="recepie_name">{name}</span>
                <p className="descreption">{description}</p>
                <button className="purchase_btn">{price}</button>
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string
}
export default Card

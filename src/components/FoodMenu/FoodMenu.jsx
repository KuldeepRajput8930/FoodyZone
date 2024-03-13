import './FoodMenu.css'
import Card from '../Card/Card'
import PropTypes from 'prop-types';

function FoodMenu({ foodItems }) {


    return (
        <div className="foodmenu">
            <div className="cards-container">
                {foodItems.map((element) => {
                    return <Card key={element.id} image={element.image} price={element.price} description={element.description} name={element.name} />
                })}
            </div>
        </div>
    )
}
FoodMenu.propTypes = {
    foodItems: PropTypes.array
};

export default FoodMenu

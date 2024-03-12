import './FoodMenu.css'
import Card from '../Card/Card'
import image1 from '/images/Ellipse 1.png'
import image2 from '/images/Ellipse 2.png'
import image3 from '/images/Ellipse 3.png'
import image4 from '/images/Ellipse 4.png'
import image5 from '/images/Ellipse 5.png'
import image6 from '/images/Ellipse 6.png'

function FoodMenu() {
    return (
        <div className="foodmenu">
            <div className="cards-container">
                <Card image={image1} />
                <Card image={image2} />
                <Card image={image3} />
                <Card image={image4} />
                <Card image={image5} />
                <Card image={image6} />
                <Card image={image6} />
                <Card image={image6} />
                <Card image={image6} />
                <Card image={image6} />
                <Card image={image6} />
            </div>

        </div>
    )
}

export default FoodMenu

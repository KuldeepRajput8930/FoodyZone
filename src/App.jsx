import './App.css'
import { useState } from 'react'
import FoodMenu from './components/FoodMenu/FoodMenu'
import Navbar from './components/Navbar/Navbar'
import image1 from '/images/Ellipse 1.png'
import image2 from '/images/Ellipse 2.png'
import image3 from '/images/Ellipse 3.png'
import image4 from '/images/Ellipse 4.png'
import image5 from '/images/Ellipse 5.png'
import image6 from '/images/Ellipse 6.png'

function App() {

  //--------------------------------- FoodItem Array---------------------------------------

  let AllfoodItems = [
    {
      id: '1',
      name: 'Boiled Eggs',
      image: image1,
      description: 'Boiled egg fry infused with butter and spices, coated with spicy curry...',
      price: '$20.00',
      category: 'breakfast'
    },
    {
      id: '2',
      name: 'RAMEN',
      image: image2,
      description: 'Experience the magic of Remen today and embark on a culinary voyage...',
      price: '$25.00',
      category: 'lunch'
    },
    {
      id: '3',
      name: 'GRILLED CHICKEN',
      image: image3,
      description: 'Savor the succulent goodness of our grilled chicken...',
      price: '$35.00',
      category: 'dinner'
    },
    {
      id: '4',
      name: 'CAKE',
      image: image4,
      description: 'Classic favorites like rich chocolate and velvety vanilla...',
      price: '$32.00',
      category: 'lunch'
    },
    {
      id: '5',
      name: 'BURGER',
      image: image5,
      description: 'Juicy beef patties grilled to perfection and flavorful veggie options...',
      price: '$15.00',
      category: 'lunch'
    },
    {
      id: '6',
      name: 'PANCAKE',
      image: image6,
      description: ' every stack is a work of art and every bite is a taste of heaven...',
      price: '$24.00',
      category: 'breakfast'
    },
    {
      id: '7',
      name: 'Boiled Eggs',
      image: image1,
      description: 'Boiled egg fry infused with butter and spices, coated with spicy curry...',
      price: '$20.00',
      category: 'breakfast'
    },
    {
      id: '8',
      name: 'RAMEN',
      image: image2,
      description: 'Experience the magic of Remen today and embark on a culinary voyage...',
      price: '$25.00',
      category: 'lunch'
    },
    {
      id: '9',
      name: 'GRILLED CHICKEN',
      image: image3,
      description: 'Savor the succulent goodness of our grilled chicken...',
      price: '$35.00',
      category: 'dinner'
    },
    {
      id: '10',
      name: 'CAKE',
      image: image4,
      description: 'Classic favorites like rich chocolate and velvety vanilla...',
      price: '$32.00',
      category: 'lunch'
    },
    {
      id: '11',
      name: 'BURGER',
      image: image5,
      description: 'Juicy beef patties grilled to perfection and flavorful veggie options...',
      price: '$15.00',
      category: 'lunch'
    },
    {
      id: '',
      name: 'PANCAKE',
      image: image6,
      description: ' every stack is a work of art and every bite is a taste of heaven...',
      price: '$24.00',
      category: 'breakfast'
    },

  ]


  //----------------------------------- Filter Functions-------------------------------------


  const [foodItems, setFoodItems] = useState(AllfoodItems)     // fooditems State


  // All Function

  const All = function () {

    setFoodItems(AllfoodItems);

  }

  // Breakfast Function

  const breakfast = function () {

    setFoodItems(AllfoodItems.filter((element) => {
      if (element.category === 'breakfast') {
        return element;
      }
    })
    )
  }

  // Lunch Function

  const lunch = function () {

    setFoodItems(AllfoodItems.filter((element) => {
      if (element.category === 'lunch') {
        return element;
      }
    })
    )
  }


  // Dinner Function

  const dinner = function () {

    setFoodItems(AllfoodItems.filter((element) => {
      if (element.category === 'dinner') {
        return element;
      }
    })
    )
  }


  return (
    <>
      <Navbar breakfast={breakfast} lunch={lunch} dinner={dinner} All={All} />
      <FoodMenu foodItems={foodItems} />
    </>
  )
}

export default App

import './Navbar.css'
import PropTypes from 'prop-types';

function Navbar({All, breakfast, lunch, dinner }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brandname">
          F<span>oo</span>dy Z<span>o</span>ne
        </div>
        <div className='search-box'>
          <input type="text" name="search" id="search" placeholder='Search Food ...' />
        </div>
      </div>
      <div className="category">
        <li onClick={All}>All</li>
        <li onClick={breakfast}>Breakfast</li>
        <li onClick={lunch}>Lunch</li>
        <li onClick={dinner}>Dinner</li>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  All: PropTypes.func,
  breakfast: PropTypes.func,
  lunch: PropTypes.func,
  dinner: PropTypes.func
};
export default Navbar

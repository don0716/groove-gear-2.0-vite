import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <>
          <div className="bg-dark py-4 text-white">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h2>Groove Gear</h2>
                <ul className="nav nav-items">
                  <li className="nav-item px-2"><NavLink className="nav-link" to={`/`}>Home</NavLink></li>
                  <li className="nav-item px-2"><NavLink className="nav-link" to={`/products`}>Products</NavLink></li>
                  <li className="nav-item px-2"><NavLink className="nav-link" to={`/wishlist`}>Wishlist</NavLink></li>
                  <li className="nav-item px-2"><NavLink className="nav-link" to={`/cart`}>Cart</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}

export default Navbar
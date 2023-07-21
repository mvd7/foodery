import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../actions/userAction";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const { cartItems } = cartState;
  const isAdmin = currentUser?.isAdmin;
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Foodery
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {isAdmin ? (
                    <li className="nav-item">
                      <a className="dropdown-item" href="/admin">
                        Dashboard
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        dispatch(userLogout());
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span>{cartItems.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// return (
//   <div>
//     <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
//       <a className="navbar-brand" href="/">
//         Foodery
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={handleToggleMenu}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//         <ul className="navbar-nav ml-auto">
//           {currentUser ? (
//             <div className="dropdown">
//               <a
//                 className="dropdown-toggle nav-link"
//                 type="button"
//                 id="dropdownMenuButton"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {currentUser.name}
//               </a>
//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="dropdownMenuButton"
//               >
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Orders
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item"
//                     href="#"
//                     onClick={() => {
//                       dispatch(userLogout());
//                     }}
//                   >
//                     <li>Logout</li>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <li className="nav-item">
//               <a className="nav-link" href="/login">
//                 Login
//               </a>
//             </li>
//           )}

//           <li className="nav-item">
//             <a className="nav-link" href="/cart">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 className="bi bi-cart"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//               </svg>
//               <span>{cartItems.length}</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
// );

// link is used to navigate between pages, sends the user to the specified path/route
import { Link } from "react-router-dom";
// useSelector is used to access the state of the store
// useDispatch is used to dispatch actions to the store
import {useSelector, useDispatch} from 'react-redux'
// RootState is the type of the state of the store, including both the uiReducer and the productsReducer
import { RootState } from "../store";
// toggleDisplayMode is the action creator that we want to dispatch, this calls the reducer, which then toggles the state of darkMode
import { toggleDisplayMode } from "../store/uiSlice";

// here we are defining the type of the props that we are passing to the Navbar component
type NavbarProps = {
  title: string;
};

// remember when using props in react with typescript, we need to define the type of the props
// this is done by using the React.FC generic type: React.FC<NavbarProps>
const Navbar: React.FC<NavbarProps> = ({ title }) => {
    // here we are pulling the darkMode from the uiReducer
    const {darkMode} = useSelector((state:RootState)=> state.ui)
    // here we are pulling the dispatch function from the useDispatch hook
    // we will use this to dispatch our actions to the store
    const dispatch = useDispatch()

    const handleChange=()=>{
      // here we are dispatching the toggleDisplayMode action creator
      // this will toggle the darkMode state true/false 
        dispatch(toggleDisplayMode())
    }

  return (
    <nav className="navbar fixed top-0 left-0 right-0">
      <h3 className="font-bold italic">{title}</h3>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
        <button
          type="button"
          className=" ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={handleChange}
       >
          {!darkMode&&<i className="bi bi-sun-fill"></i>}
          {darkMode&&<i className="bi bi-moon-fill"></i>}

        </button>
      </div>
    </nav>
  );
};

export default Navbar;

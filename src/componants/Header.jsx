import{Link,NavLink} from 'react-router-dom'
const Header = () => {


  return (
    <div  className="header  bg-gray-300 pt-6 pb-4 px-2
      
    ">
      <div className="container flex justify-between align-center py-3 px-2 mx-auto ">
        <div className="font-weight-bold logo fs-3 
         ">
          
          <Link to="/" className="text-decoration-none text-dark hover:text-gray-500 transition duration-300 ease-in-out">Movies</Link>
        </div>
        <ul className="flex justify-between align-center list-unstyled fs-5 
        gap-6 
        ">
        
          <li>
            <NavLink to='/' className="text-decoration-none text-dark hover:text-gray-500 transition duration-300 ease-in-out">Watch List</NavLink>
          </li>
          <li>
            <NavLink to='watched' className="text-decoration-none text-dark hover:text-gray-500 transition duration-300 ease-in-out">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add" className="pd-2 px-4 bg-gray-500 rounded text-white border-radius-5
              hover:bg-gray-700 transition duration-300 ease-in-out 
            ">Add</NavLink>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Header;

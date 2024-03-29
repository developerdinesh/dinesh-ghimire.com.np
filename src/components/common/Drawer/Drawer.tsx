import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css'; // Import the CSS file for the drawer

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="toggle-drawer" onClick={toggleDrawer}>
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <div className="drawer-content">
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

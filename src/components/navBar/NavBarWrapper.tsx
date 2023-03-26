import { useEffect, useState } from 'react';

import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

export default function NavbarWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // show the navbar for all routes except "/" and "/sign-up"
    if (location.pathname !== '/' && location.pathname !== '/sign-up') {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  return showNavbar ? <NavBar /> : null;
}

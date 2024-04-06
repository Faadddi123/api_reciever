import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
// import { Link, useLocation } from "react-router-dom";

function Navbar() {
  

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link to="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link to="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
      </NavigationMenuList>
      <div>
        {/* Display content based on URL */}
        {location.pathname === '/' && <div>Home Content</div>}
        {location.pathname === '/about' && <div>About Content</div>}
        {location.pathname === '/contact' && <div>Contact Content</div>}
      </div>
    </NavigationMenu>
  );
}

export default Navbar; 
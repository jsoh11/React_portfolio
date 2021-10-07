import React from 'react'

function Nav() {
    return (
        <nav class="navbar is-black px-6" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a href="#about" class="navbar-item has-text-link">
                  About
                </a>
                <a href="#work" class="navbar-item has-text-link">
                  Previous Work
                </a>
                <a href="#contact" class="navbar-item has-text-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav

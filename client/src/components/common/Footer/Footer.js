import React from "react";

const Footer = () => {
      return (
            <div> 
                  <footer>
                  <p   className="typo"   >
                  Copyright {" "} &copy;  {new Date().getFullYear()}
                  &nbsp; Cia from Earth! All rights reserved.
                  </p>
                  </footer>
            </div>
      );
};
export default Footer;
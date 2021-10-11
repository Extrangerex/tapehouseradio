import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <Link to="#" className="facebook">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Link>
        <Link to="#" className="instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
        <Link to="#" className="spotify">
          <FontAwesomeIcon icon={["fab", "spotify"]} />
        </Link>
        <Link to="#" className="youtube">
          <FontAwesomeIcon icon={["fab", "mixcloud"]} />{" "}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

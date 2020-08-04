import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
// import ReactPasswordStrength from "react-password-strength"

const Header = () => {
        return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to={"https://bit.ly/3f1wfcu"}>
                <div className="text-black">JSP Summer Camp 2020</div>
            </Link>
        </div>
    </nav>
        )
}
export default Header
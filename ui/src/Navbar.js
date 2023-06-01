import React from 'react';
import "bootstrap/js/src/collapse.js";

function Navbar({home, links}) {
    const barLinks = links.map(link => {
        return (
            <li key={link.name} className="nav-item">
                <a className="nav-link" href={link.path}>{link.name}</a>
            </li>
        )
    })

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="/">{home}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                {barLinks}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
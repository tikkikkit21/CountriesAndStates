import React from 'react';

function Navbar({home, links}) {
    const barLinks = links.map(link => {
        return (
            <li key={link.name} className="nav-item">
                <a className="nav-link" href={link.path}>{link.name}</a>
            </li>
        )
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="/">{home}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                    <a className="nav-link" href="/countries">Countries</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/states">States</a>
                </li> */}
                {barLinks}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
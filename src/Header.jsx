import React from 'react';

function Header() {
  return (
    <header>
      <div className="container clearfix">
        <h2 className="m-3 float-start">Srikant V S</h2>
        <ul className="m-3 nav justify-content-end float-end">
          <li className="nav-item" data-aos="fade-left" data-aos-delay="0">
            <a className="nav-link text-dark" href="https://linkedin.com/in/srikantvs26" title="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
          <li className="nav-item" data-aos="fade-down" data-aos-delay="0">
            <a className="nav-link text-dark" href="https://github.com/srikantvs26" title="github" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
          <li className="nav-item" data-aos="fade-right" data-aos-delay="0">
            <a className="nav-link text-dark" href="https://twitter.com/srikantvs26" title="twitter" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-x-twitter fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

import '../Footer/footer.css'

export default function Footer() {
  return (
    <div className="footer p-5 text-white text-center position-relative" id='footerStyling'>
      <div className="container">
        <p className="lead">Copyright &copy; 2022 by Jose Barreto</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </div>
  );
}
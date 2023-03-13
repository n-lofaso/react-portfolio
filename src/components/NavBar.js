import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-pills nav-fill bg-primary-subtle justify-content-center'>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Projects'
          onClick={() => handlePageChange('Projects')}
          className={
            currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;

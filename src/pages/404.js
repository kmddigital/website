import React from 'react';
import Link from 'gatsby-link';

export default class Index extends React.Component {
  render () {
    return (
      <div className='container'>

        <div className='fourzerofour'>
          <h1>404 - Page Not Found</h1>
          <p className='lead'>We couldn't find the page you were looking for.<br /> Why don't you try <Link to='/'>going home</Link>?</p>
        </div>

      </div>
    );
  }
}

import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className='container'>

      <div className='error-404'>
        <h1>404 - Page Not Found</h1>
        <p className='lead'>We couldn't find the page you were looking for.<br /> Why don't you try <Link to='/'>going home</Link>?</p>
      </div>

    </div>
  </>
);

export default NotFoundPage;

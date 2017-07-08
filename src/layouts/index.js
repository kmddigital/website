import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/bootstrap/bootstrap.min.css';
import '../css/style.css';

export default class Template extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title='Hello Gatsby'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
          />
        <nav className='navbar navbar-toggleable-md navbar-inverse bg-gatsby fixed-top'>
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <Link to='/' className='navbar-brand'>Gatsby</Link>

          <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
            <ul className='navbar-nav sidebar-nav ml-auto'>
              <NavItem location={this.props.location.pathname} link='/' name='Home' />
              <NavItem location={this.props.location.pathname} link='/about/' name='About' />
            </ul>
          </div>
        </nav>
        {this.props.children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func
};

class NavItem extends React.Component {
  isActive () {
    return this.props.location === this.props.link;
  }

  getTitle () {
    if (this.isActive()) {
      return (
        <div>
          {this.props.name} <span className='sr-only'>(current)</span>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.name}
        </div>
      );
    }
  }

  render () {
    return (
      <li className={!this.isActive() ? 'nav-item' : 'nav-item active'}>
        <Link className='nav-link' to={this.props.link}>{this.getTitle()}</Link>
      </li>
    );
  }
}

import React from 'react';
import gif from '../img/gatsby.gif';

export default class Index extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='hello-gatsby'>
          <h1>Hello Old Sport</h1>
          <p className='lead'>Welcome to <a target='_blank' href='https://gatsbyjs.org'>Gatsby</a>.</p>
          <img src={gif} alt='Gatsby GIF' />
        </div>
      </div>
    );
  }
}

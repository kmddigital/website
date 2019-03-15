import React, { Component } from 'react';

import SEO from '../components/seo';

import openSource from '../img/open_source.svg';
import connected from '../img/connected.svg';
import story from '../img/story.svg';

import '../css/style.css';
import '../css/vendor/bootstrap.min.css';
import '../css/vendor/font-awesome.css';

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
  }    

  componentDidMount () {      
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
  }

  render() {
    var opacity;
    if (this.state.currentScrollHeight)
      opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    else
      opacity = 100;
    return (
      <>
        <SEO title="Home" keywords={[`develop`, `application`, `progamming`, `kmd`, `digital`]} />
        <nav className="navbar navbar-expand-lg navbar-dark navbar-absolute">
          <div className="container">
            <a className="navbar-brand" href="/">KMD Digital</a>
          </div>
        </nav>
      
        <div className="background">
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center text-white">
                  <h1 className="font-weight-light">Developing Better</h1>
                  <p className="lead">Building Modern Technologies for a Better World</p>
                </div>
              </div>
            </div>
            <span style={{opacity: opacity}} className="scroll-link">
              <svg className="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" preserveAspectRatio="xMidYMid meet">
                <g fill="none" fillRule="evenodd">
                  <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"/>
                  <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                </g>
              </svg>
            </span>    
          </header>
          <div className="diagonal container-fluid bg-white">
            <div className="container develop-for">
              <h4 className="display-4">We Develop</h4>
              <div className="row">
                <div className="col-sm">
                  <i className="fas fa-desktop"></i>
                  <p>Web Applications</p>
                </div>
                <div className="col-sm">
                  <i className="fas fa-server"></i>
                  <p>Infrastructures</p>
                </div>
                <div className="col-sm">
                  <i className="fas fa-mobile-alt"></i>
                  <p>Native Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: '-1px', padding: '1rem'}} className="diagonal container-fluid bg-white">
          <div className="container">
          </div>
        </div>
        <div className="row nm">
          <div className="col-sm-6 bg-about md-5">
            <img src={story} style={{width: '35rem'}} className="img-fluid mx-auto d-block" alt="Open Source"></img>
          </div>
          <div className="col-sm-6 md-5">
            <div className="container about d-flex h-300">
              <div className="row justify-content-center align-self-center">
                <h1 className="display-4" style={{textAlign: 'center'}}>Our Story</h1>
                <p className="lead mb-0">KMD Digital was founded in 2016 as a technology company in order to deliever meaningful products. We're passionate about building new technologies that improve lives.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row nm">
          <div className="col-sm-6 md-5">
            <div className="container about d-flex h-300">
              <div className="row justify-content-center align-self-center">
                <h1 className="display-4" style={{textAlign: 'center'}}>Open Source</h1>
                <p className="lead mb-0">KMD Digital believes in the power of open source, giving everyone access to tools that lead to innovation. We take advantage of hundreds of open source tools as well as contributing our own tools and side projects.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 bg-open-source md-5">
            <img src={openSource} style={{width: '35rem'}} className="img-fluid mx-auto d-block" alt="Open Source"></img>
          </div>
        </div>
        <div className="row nm">
          <div className="col-sm-6 bg-connected md-5">
            <img src={connected} style={{width: '35rem'}} className="img-fluid mx-auto d-block" alt="Open Source"></img>
          </div>
          <div className="col-sm-6">
            <div className="container about d-flex h-300">
              <div className="row justify-content-center align-self-center">
                <h1 className="display-4" style={{textAlign: 'center'}}>Connected Code</h1>
                <p className="lead mb-0">Connected infrastructures and applications are the key to developing feature rich products. We've built applications ranging from static web apps to cross platform applications connected in realtime.</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex">
              <p className="text-light mb-0 justify-content-center align-self-center">Copyright &copy; 2019 KMD Digital LLC</p>
            </div>
            <div className="col-sm-6 text-right">
              <a href="https://github.com/kmddigital" target="_blank" rel="noopener noreferrer"><i className="text-light fab fa-2x fa-github"></i></a>
            </div>
          </div>
          </div>
        </footer>
      </>
    )
  }
}

export default IndexPage

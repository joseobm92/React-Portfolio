import React from 'react';

import '../Portfolio/portfolio.css'
import travelBuddy from '../../images/travelbuddy.png'
import techblog from '../../images/techblog.png'
import crypto from '../../images/crypto.png'
import portfolio from '../../images/reactportfolio.png'
import oyster from '../../images/oyster.png'

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <h1>Portfolio</h1>
        </div>
        <div className='col-lg-10 mx-2 my-2'>

        <a href='https://immense-refuge-82677.herokuapp.com/' target='_blank' rel="noopener noreferrer">
              <div className="card text-bg-dark">
                <img src={oyster} className="card-img" alt="..."></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Oyster</h5>
                  <p className="card-text"> App is an NFT platform to socialize, share and learn about NFT projects</p>
                  <p className="card-text"><small> MERN STACK, Bootstrap, Moralis, Ethers, Wagmi, Axios, GraphQL, Particles, Lottie</small></p>
                  <a href="https://github.com/joseobm92/Oyster" target="_blank" rel='noreferrer'> <i className="bi bi-github text-white" ></i></a>

                </div>
              </div>
            </a>

          
        </div>
        <div className='row'>
          <div className='col-lg-5 mx-2 my-2'>
          <a href='https://radiant-lowlands-48817.herokuapp.com/' target='_blank' rel="noopener noreferrer">
            <div className="card text-bg-dark">
              <img src={crypto} className="card-img" alt="cryptofolio"></img>
              <div className="card-img-overlay">
                <h5 className="card-title">Cryptofolio</h5>
                <p className="card-text">App allows the user to learn and track their favorite currencies</p>
                <p className="card-text"><small>Express, mySQL, Node, Sequelize, Handlebars,Express Session, dotenv, bcrypt, Axios</small></p>
                <a href="https://github.com/joseobm92/MVC-cryptofolio" target="_blank" rel='noreferrer'> <i className="bi bi-github text-white" ></i></a>
              
              </div>
            </div>
          </a>
            
          </div>

          <div className='col-lg-5 mx-2 my-2'>
          <a href='https://joseobm92.github.io/Travel-Buddy/' target='_blank' rel="noopener noreferrer">
              <div className="card text-bg-dark">
                <img src={travelBuddy} className="card-img" alt="travelBuddy"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Travel Buddy</h5>
                  <p className="card-text">App allows the user to search live info from flights and live weather data</p>
                  <p className="card-text"><small>Jquery, Bulma, Server side APIs</small></p>
                  <a href="https://github.com/joseobm92/Travel-Buddy" target="_blank" rel='noreferrer'> <i className="bi bi-github text-white" ></i></a>

                </div>
              </div>
            </a>

            
          </div>

        </div>
        <div className='row'>
        <div className='col-lg-5 mx-2 my-2'>
            <a href='https://joseobm92.github.io/React-Portfolio/' target='_blank' rel="noopener noreferrer">
              <div className="card text-bg-dark">
                <img src={portfolio} className="card-img" alt="portfolio"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">React Portfolio</h5>
                  <p className="card-text">App is a portfolio created using React</p>
                  <p className="card-text"><small> Node, React, Bootstrap</small></p>
                  <a href="https://github.com/joseobm92/React-Portfolio" target="_blank" rel='noreferrer'> <i className="bi bi-github text-white" ></i></a>
                </div>
              </div>
            </a>
          </div>

          <div className='col-lg-5 mx-2 my-2'>
          <a href='https://boiling-shore-72029.herokuapp.com/' target='_blank' rel="noopener noreferrer">
              <div className="card text-bg-dark">
                <img src={techblog} className="card-img" alt="techBlog"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Tech Blog</h5>
                  <p className="card-text">App is tech related Blog</p>
                  <p className="card-text"><small>Express, Node, Handlebars, Sequelize, Express session, dotenv, bcrypt</small></p>
                  <a href="https://github.com/joseobm92/Tech-blog-MVC" target="_blank" rel='noreferrer'> <i className="bi bi-github text-white" ></i></a>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
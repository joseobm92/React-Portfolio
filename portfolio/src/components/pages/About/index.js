import React from 'react';

import profile from '../../images/profile.png'
import '../About/about.css'

export default function About() {
  return (
    <div className='container'>
      <div className='row lh-base'>
        <div className='text-center mb-4'>
          <h1 className=''>About Me</h1>

        </div>
        <div className='col-md-4'>
          <div className='container text-center mb-4'>

            <img src={profile} class="img-fluid" alt="profile" id='profile'></img>

          </div>
        </div>
        <div className='col-md-4 border-end border-start'>
          <h2 className='mb-4'>Where I come from...</h2>
          <p>
            My name is Jose Barreto, I'm originally from Venezuela and have been living in Florida since 2010. I
            graduated in 2015 with an International Business major with a minor on Business Administration from
            the Florida International University.<br></br>
            My work experience since then has been a combination of
            working 4 years in a direct marketing company, first as a sales person and quickly grew to become an
            office manager where I got the chance to hire, train, and develop people on sales and leadership;
            from there the COVID pandemic started and I decided to start on Airbnb with my wife, we bought a
            house near by Disney and we rent it to people visiting the area and we primarily focus on managing
            the property, that in combination to some WEB3 and cryptocurrency investments have been my work
            experience for the last 2-3 years.
          </p>
        </div>
        <div className='col-md-4'>
          <h2 className='mb-4'>This is my Coding Journey</h2>
          <p>
            My life as a Full Stack Web Programmer is just getting started while going through a Full Stack
            Developer Bootcamp at UCF!<br></br>
            My passion to work on computers and understand their language has always
            been there, This is a huge career change for me, with the goal of being able to work remotely and
            travel the world while creativily building web apps.
          </p>

        </div>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col-md-12 text-center' id='icons'>
          <a href="https://github.com/joseobm92" target="_blank" rel='noreferrer'><i className="bi bi-github text-dark mx-4" ></i></a>
          <a href="https://www.linkedin.com/in/jose-barreto-875087ab/" target="_blank" rel='noreferrer'><i className="bi bi-linkedin text-dark mx-4"></i></a>
          <a href="https://github.com/joseobm92" target="_blank" rel='noreferrer'><i className="bi bi-stack-overflow text-dark mx-4"></i></a>
        </div>
      </div>

    </div>
  );
}
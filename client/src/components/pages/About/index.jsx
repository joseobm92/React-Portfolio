import React from 'react';

import profile from '../../images/profile.png'
import '../About/about.css'
import Footer from '../Footer';

export default function About() {
  return (
    <>
    <div className='container'>
      <div className='row lh-base'>
        <div className='mb-4'>
          <h1 className=''>About Me</h1>
        </div>
        <div className='col-md-4 mt-2'>
          <div className='container text-center mb-4'>

            <img src={profile} class="img-fluid" alt="profile" id='profile'></img>

          </div>
        </div>
        <div className='col-md-4 border-end border-start mt-2' id='border'>
          <h2 className='mb-4'>Where I come from...</h2>
          <p>
            My name is Jose Barreto, I'm originally from Venezuela and have been living in Florida since 2010. I
            graduated in 2015 with an International Business major with a minor on Business Administration from
            Florida International University.<br></br>
            My work experience since then has been a combination of
            working 4 years in a direct marketing company, first as a sales person and quickly grew to become an
            office manager where I got the chance to hire, train, and develop people on sales and leadership;
            from there the COVID pandemic started and I decided to start on Airbnb with my wife, we bought a
            house near by Disney and we rent it to people visiting the area and we primarily focus on managing
            the property, that in combination to some WEB3 and cryptocurrency investments have been my work
            experience for the last 2-3 years.
          </p>
        </div>
        <div className='col-md-4 mt-2'>
          <h2 className='mb-4'>This is my Coding Journey</h2>
          <p>
            I am a Full Stack Web Developer with a background in Business and Sales.  I recently earned a certificate in Full Stack Development from the University of Central Florida, where I developed skills in JavaScript, CSS, React.js, and responsive web design.
            <br></br>
            An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My degree in Business Administration has prepared me to approach problems with creativity and teamwork.
            <br></br>
            With each project, I aim to understand how to best engage users for an impactful user experience. I applied aspects of UX and agile development in a recent project where I worked in a team of 4 to develop a single-page MERN app that helps local business owners track their sales, inventory, and attendance at specialty events.
            <br></br>
            When Im not designing or developing, I enjoy soccer, outdoors, trying out a new things, or reading up on the latest trends in web and mobile design.
            <br></br>
            Im excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project here.
          </p>

        </div>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col-md-12 text-center' id='icons'>
          <a href="https://github.com/joseobm92" target="_blank" rel='noreferrer'><i className="bi bi-github text-dark mx-4" ></i></a>
          <a href="https://www.linkedin.com/in/jose-barreto-875087ab/" target="_blank" rel='noreferrer'><i className="bi bi-linkedin text-dark mx-4"></i></a>
          <a href="https://stackoverflow.com/users/20707711/jose-barreto" target="_blank" rel='noreferrer'><i className="bi bi-stack-overflow text-dark mx-4"></i></a>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
}
import React from 'react';

import '../Contact/contact.css'

export default function Contact() {
  return (
    <div className='container'>
      <div className='row gap-4'>
          <h1>Contact me</h1>
        <div className='col-md-5'>

          <div className='row'>
            <div className='col-md-3 icon'>
              <a href="https://github.com/joseobm92" target="_blank" rel='noreferrer'><i className="bi bi-github text-dark" ></i></a>
            </div>
            <div className='col-md-3 icon'>
              <a href="mailto:joseobm92@gmail.com" target="_blank" rel='noreferrer'> <i className="bi bi-envelope-at text-dark" ></i></a>
            </div>
          </div>
        </div>
        <div className='col-md-5'>

          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="name" class="form-control" id="nameInput" placeholder="Ex. Caroline"></input>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"></input>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="messageInput" rows="8"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-4">Submit</button>
        </div>

      </div>
    </div>
  );
}

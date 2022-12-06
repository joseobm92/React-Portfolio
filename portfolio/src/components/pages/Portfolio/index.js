import React from 'react';

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <h1>Portfolio</h1>
        </div>
        <div className='col-md-4'>
          <a href="https://github.com/joseobm92" target="_blank" rel='noreferrer'><img src="https://picsum.photos/250/250" class="figure-img img-fluid rounded" alt="profile"></img></a>
          <p className=''>some text</p>
        </div>

      </div>
    </div>
  );
}
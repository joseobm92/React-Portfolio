import React from 'react';

import '../Resume/resume.css'

import resume from '../../directory/resume2022.pdf'

export default function Contact() {
    return (
        <div className='container'>
            <div className='row'>
                <h1> Resume </h1>
                <a className='text-decoration-none link-dark' href={resume} download='resume'>Download the Resume <i className="bi bi-file-earmark-person"></i> </a>
                
                    <div className='col-md-5 m-2 front shadow'>
                        <h2 className='px-2 py-2'>Front-end Proficiencies</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">HTML5</li>
                            <li class="list-group-item">CSS3</li>
                            <li class="list-group-item">JavaScript ES6+</li>
                            <li class="list-group-item">Jquery</li>
                            <li class="list-group-item">Jquery UI</li>
                            <li class="list-group-item">Responsive Design</li>
                            <li class="list-group-item">React</li>
                            <li class="list-group-item">BootStrap</li>
                            <li class="list-group-item">Bulma</li>
                            <li class="list-group-item">Google Fonts</li>
                        </ul>
                    </div>
                
                

                <div className='col-md-5  m-2 back shadow'>

                    <h2 className='px-2 py-2'>Back-end Proficiencies</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">APIs</li>
                        <li class="list-group-item">Node</li>
                        <li class="list-group-item">Express</li>
                        <li class="list-group-item">MySQL, Sequelize</li>
                        <li class="list-group-item">MongoDB, Mongoose</li>
                        <li class="list-group-item">REST</li>
                        <li class="list-group-item">GraphQL</li>
                        <li class="list-group-item">Postman</li>
                    </ul>
                </div>
                

            </div>
        </div>
    );
}

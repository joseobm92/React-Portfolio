import React from 'react';

export default function Contact() {
    return (
        <div className='container'>
            <div className='row'>
                <h1> Resume </h1>
                <div className='col-md-5 mx-3 my-3'>

                    <h2>Front-end Proficiencies</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HTML</li>
                        <li class="list-group-item">CSS</li>
                        <li class="list-group-item">JavaScript</li>
                        <li class="list-group-item">Jquery</li>
                        <li class="list-group-item">Responsive Design</li>
                        <li class="list-group-item">React</li>
                        <li class="list-group-item">BootStrap</li>
                        <li class="list-group-item">Bulma</li>
                    </ul>
                </div>
                <div className='col-md-5 mx-3 my-3'>

                    <h2>Back-end Proficiencies</h2>
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

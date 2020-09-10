import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className= "about__container">
            <span>
                어바웃 페이지 입니다. 야호!
            </span>
            <span> - 2020.09.10</span>
        </div>
    );
}

export default About;
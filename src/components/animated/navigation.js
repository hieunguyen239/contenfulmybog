import React from 'react';
import '../../static/styles/navigation.scss';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigation = (props) => {
    const { paraObject } = props;
    library.add(faCircle);
   
    return (
        <div className="navigation-wrapper">
            <ul>
                <li>
                    <a href="#" onClick={(e) => {e.preventDefault(); paraObject.scrollTo(0)}}>
                        <span className="nav-label">Education and qualification</span>
                        <span className="nav-icon"><FontAwesomeIcon icon="circle" /></span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => {e.preventDefault(); paraObject.scrollTo(0.8)}}>
                        <span className="nav-label">Technical Skills</span>
                        <span className="nav-icon"><FontAwesomeIcon icon="circle" /></span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => {e.preventDefault(); paraObject.scrollTo(1.5)}}>
                        <span className="nav-label">Working Experiences</span>
                        <span className="nav-icon"><FontAwesomeIcon icon="circle" /></span>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default navigation;
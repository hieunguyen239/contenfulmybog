import React from 'react';
import Img from 'gatsby-image';
import '../static/styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const sidebar = (props) => {
    const {person} = props;
    library.add(fab, faMapMarkerAlt, faPhone, faEnvelopeOpen, faCalendarAlt);
    return (
        <aside className="sidebar">
             <section className="username">
                {person.name}
            </section>
            <section className="avatar">
                <Img alt="" fixed={person.avatar.fixed} className="rounded-circle" />
            </section>
            <section className="short-bio">
               <div className="bio">{person.shortBio.shortBio}</div>
            </section>
            <section className="social-connect">
                <div className="contact-info">
                    <div className="contact phone"><FontAwesomeIcon icon="calendar-alt" />{person.dob}</div>
                    <div className="contact phone"><FontAwesomeIcon icon="phone" />{ person.phone }</div>
                    <div className="contact email"><a href={`mailto:${person.email}`}><FontAwesomeIcon icon="envelope-open" />{ person.email }</a></div>
                    <div className="contact skype"><a href={`skype:${person.skype}`}><FontAwesomeIcon icon={['fab', 'skype']} />{ person.skype }</a></div>
                    <div className="contact address"><FontAwesomeIcon icon="map-marker-alt" />{ person.address.address }</div>
                </div>
            </section>
            <section className="social-connect other">
                <div className="contact telegram"><a href={`telegram:${person.skype}`} title="Telegram"> <FontAwesomeIcon icon={['fab', 'telegram']} /></a></div>
                <div className="contact github"><a href={`telegram:${person.skype}`} title="Github"> <FontAwesomeIcon icon={['fab', 'github']} /></a></div>
            </section>
        </aside>
      )
}
export default sidebar;

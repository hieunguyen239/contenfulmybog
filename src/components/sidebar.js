import React from 'react';
import Img from 'gatsby-image';
import '../static/styles/sidebar.scss';

const sidebar = (props) => {
    const {person} = props;
    console.log(person);
    return (
        <aside className="sidebar">
            <section className="avatar">
                <Img alt="" fixed={person.avatar.fixed} />
            </section>
            <section className="username">
                {person.name}
            </section>
        </aside>
      )
}
export default sidebar;

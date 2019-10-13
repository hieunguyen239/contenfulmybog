import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import { Progress } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../static/styles/content.scss';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Content extends Component {
    render() {
        const { person, companies } = this.props;
        console.log(companies);
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={4} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3304&q=80)', backgroundSize: 'cover' }} className="para-content">
                {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

                <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                {/* <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer> */}

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true)
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <img src={url('server')} style={{ width: '20%' }} /> */}
                    <section className="content">
                    <h1 className="title">Education and qualification:</h1>
                    <div className="detail">
                        <ul>
                            <li>University: { person.university }</li>
                            <li>Major: { person.major }</li>
                            <li>Graduation Year: { person.graduationYear }</li>
                            <li>GPA: { person.university }</li>
                            <li>Other Training Courses: { person.otherTraining }</li>
                        </ul>
                    </div>
                    </section>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
                <section className="content technical">
                    <h1 className="title">Technical Skills:</h1>
                    <div className="details">
                        <ul className="skill-lists">
                            <li><label htmlFor="javascript">Javascript:</label> <Progress color="success" value={person.javascript * 10} /></li>
                            <li><label htmlFor="es6">ES6:</label> <Progress color="success" value={person.es6 * 10} /></li>
                            <li><label htmlFor="jquery">Jquery:</label> <Progress color="success" value={person.jquery * 10} /></li>
                            <li><label htmlFor="scss">SCSS:</label> <Progress color="success" value={person.scss * 10} /></li>
                            <li><label htmlFor="react">React:</label> <Progress color="success" value={person.react * 10} /></li>
                            <li><label htmlFor="grunt">Grunt:</label> <Progress color="success" value={person.grunt * 10} /></li>
                            <li><label htmlFor="gulp">Gulp:</label> <Progress color="success" value={person.gulp * 10} /></li>
                            <li><label htmlFor="webpack">Webpack:</label> <Progress color="success" value={person.webpack * 10} /></li>
                            <li><label htmlFor="magento">Magento:</label> <Progress color="success" value={person.magento * 10} /></li>
                            <li><label htmlFor="wordpress">Wordpress:</label> <Progress color="success" value={person.wordpress * 10} /></li>
                            <li><label htmlFor="sfcc">SFCC (sale forces):</label> <Progress color="success" value={person.sfcc * 10} /></li>
                            <li><label htmlFor="bigcommerce">Big Commerce:</label> <Progress color="success" value={person.bigCommerce * 10} /></li>
                            <li><label htmlFor="amp">AMP:</label> <Progress color="success" value={person.amp * 10} /></li>
                            <li><label htmlFor="mysql">MySQL:</label> <Progress color="success" value={person.mySql * 10} /></li>
                            <li><label htmlFor="git">Git:</label> <Progress color="success" value={person.git * 10} /></li>
                            <li><label htmlFor="gtm">Google Tag Manager:</label> <Progress color="success" value={person.googleTagManager * 10} /></li>
                            <li><label htmlFor="fb">Facebook Remaketing:</label> <Progress color="success" value={person.facebookRemakerting * 10} /></li>
                            <li><label htmlFor="emailcoding">Email Coding:</label> <Progress color="success" value={person.emailCoding * 10} /></li>
                            <li><label htmlFor="psd">Photoshop:</label> <Progress color="success" value={person.photoshop * 10} /></li>
                            <li><label htmlFor="sketch">Sketch/Figma/InvisionApp:</label> <Progress color="success" value={person.sketchfigmainvisionApp * 10} /></li>
                            <li><label htmlFor="windows">Windows:</label> <Progress color="success" value={person.windows * 10} /></li>
                            <li><label htmlFor="ubuntu">Ubuntu:</label> <Progress color="success" value={person.ubuntu * 10} /></li>
                            <li><label htmlFor="macos">MacOS:</label> <Progress color="success" value={person.macOs * 10} /></li>
                        </ul>
                    </div>
                </section>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
                        <section className="content experiences">
                            <Timeline>
                                {
                                    companies.map((item, index) => {
                                    return (
                                            <TimelineItem
                                                key={index}
                                                dateText={`${item.node.startDate} - ${item.node.endDate}`}
                                            >
                                                <h3 className="timeline-headline">{item.node.companyName}</h3>
                                                <div className="timeline-detail">{item.node.jobDetails.jobDetails}</div>
                                            </TimelineItem>
                                    )
                                    })
                                }
                            </Timeline>
                        </section>
                </ParallaxLayer>
            </Parallax>
        );
    }
  }

export default Content;
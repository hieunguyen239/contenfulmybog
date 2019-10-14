import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import { Progress } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../static/styles/content.scss';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Content extends Component {
    render() {
        const { person, companies, skills } = this.props;

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
                            {
                                skills.map(ele => <li><label htmlFor="skill">{ele.node.name}:</label> <Progress color="success" value={ele.node.rate * 10} /></li>)
                            }
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
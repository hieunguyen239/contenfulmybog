import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import { Progress } from 'reactstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../static/styles/content.scss';
import mainBG from '../static/images/coding.gif';
import ScrollIcon from '../components/animated/scrollIcon';
import Navigation from '../components/animated/navigation';
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Content extends Component {
    render() {
        const { person, companies, skills } = this.props;

        return (
            <Parallax scrolling={true} ref={ref => (this.parallax = ref)} pages={4} style={{ background: ` linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${ mainBG }) center center` }} className="para-content">
                {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}
                <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

                <ParallaxLayer offset={0} speed={-8.3} style={{ pointerEvents: 'none' }}>
                    <ScrollIcon />
                    <Navigation />
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
                    className="pala-wrapper"
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
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
                    className="pala-wrapper"
                    offset={0.8}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
                <section className="content technical">
                    <h1 className="title">Technical Skills:</h1>
                    <div className="details">
                        <ul className="skill-lists">
                            {
                                skills.map(ele => <li key={ele.node.name}><label htmlFor="skill">{ele.node.name}:</label> <Progress color="success" value={ele.node.rate * 10} /></li>)
                            }
                        </ul>
                    </div>
                </section>
                </ParallaxLayer>

                <ParallaxLayer
                    className="pala-wrapper"
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
                        <section className="content experiences">
                            <h1 className="title">Working Experiences:</h1>
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
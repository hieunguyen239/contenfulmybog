import React, { Component } from 'react'
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/index.scss';
import {Container, Row, Col} from 'reactstrap';

class RootIndex extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <Sidebar person={this.props.data.contentfulPerson}/>
          </Col>
          <Col lg="10">
            <Content />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPerson {
      name
      shortBio {
        shortBio
      }
      phone
      title
      twitter
      email
      facebook
      github
      company
      avatar {
        fixed(resizingBehavior: PAD, width: 200, height: 200) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`

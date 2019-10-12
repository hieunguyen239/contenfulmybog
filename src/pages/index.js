import React from 'react'
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/index.scss';
import {Container, Row, Col} from 'reactstrap';

const RootIndex = (props) => {
    return (
      <Container fluid={true}>
        <Row>
          <Col lg="3">
            <Sidebar person={props.data.contentfulPerson}/>
          </Col>
          <Col lg="9">
            <Content person={props.data.contentfulPerson}/>
          </Col>
        </Row>
      </Container>
    )
};

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
    email
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
    gpa
    university
    skype
    major
    maritalStatus
    otherTraining
    graduationYear
    dob
    address {
      address
    }
    gender
    wordpress
    windows
    webpack
    ubuntu
    sketchfigmainvisionApp
    react
    php
    photoshop
    javascript
    jquery
    macOs
    magento
    grunt
    gulp
    googleTagManager
    git
    facebookRemakerting
    emailCoding
    es6
    sfcc
    bigCommerce
    mySql
    amp
    git
    scss
  }
}
`

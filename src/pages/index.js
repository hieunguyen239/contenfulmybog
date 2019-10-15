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
            <Content person={props.data.contentfulPerson} companies={props.data.allContentfulCompanies.edges} skills={props.data.allContentfulSkills.edges} />
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
      fixed(resizingBehavior: PAD, width: 150, height: 150) {
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

  }
  allContentfulCompanies {
    edges {
      node {
        endDate
        startDate
        companyName
        jobDetails {
          jobDetails
        }
      }
    }
  }
  allContentfulSkills {
    edges {
      node {
        name
        rate
      }
    }
  }
}
`

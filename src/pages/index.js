import React from 'react'
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/index.scss';


const RootIndex = (props) => {
    return (
      <div className="custom-container">
        
          <div className="col-left">
            <Sidebar person={props.data.contentfulPerson}/>
          </div>
          <div  className="col-right">
            <Content person={props.data.contentfulPerson} companies={props.data.allContentfulCompanies.edges} skills={props.data.allContentfulSkills.edges} />
          </div>
       
      </div>
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
      fixed(resizingBehavior: PAD, width: 120, height: 120) {
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

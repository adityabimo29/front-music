import React, { useEffect, Fragment } from 'react';
// import '../assets/css/Profile.css';
import jwt_decode from 'jwt-decode';
import Comment from '../components/Comment';
import {
  CardImg,
  Row,
  Col,
  Container,
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
// import Picture from '../assets/images/01.jpg';
import { connect } from 'react-redux';
import { functiongetUsers } from '../actions';

function NewProfile(props) {
  console.log(props);
  const mytoken = localStorage.getItem('token');
  const decode = jwt_decode(mytoken);

  useEffect(() => {
    props.getUsers();
  }, []);

  const mydata = props.profile.filter(item => item.id_user == decode.id_user);

  function idRole(val) {
    var result = ' ';
    switch (val) {
      case 1:
        result = 'Drummer';
        break;
      case 2:
        result = 'Vocalist';
        break;
      case 3:
        result = 'Bassist';
        break;
      case 4:
        result = 'Pianist';
        break;
      case 5:
        result = 'Guitarist';
        break;
      default:
        result = 'Other';
    }
    return result;
  }

  function idGenre(val) {
    var result = ' ';
    switch (val) {
      case 1:
        result = 'Pop';
        break;
      case 2:
        result = 'Jazz';
        break;
      case 3:
        result = 'Rock';
        break;

      default:
        result = 'Rnb/Ska';
    }
    return result;
  }
  var gambar = decode.avatar;

  return (
    <Container style={{ backgroundColor: 'white' }}>
      {mydata.length > 0 && (
        <Fragment>
          <Row>
            <Col
              style={{ textAlign: 'center' }}
              className='ml-auto mr-auto'
              md={12}
            >
              <h1>Profile</h1>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Card style={{ border: '1px solid grey' }}>
                <CardBody>
                  <CardImg
                    width='100%'
                    src={gambar}
                    // src='https://images.pexels.com/photos/53453/marilyn-monroe-woman-actress-pretty-53453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

                    alt='Card image cap'
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={7}>
              <Card
                style={{
                  border: '1px solid grey',
                  backgroundColor: '#f9fbe7'
                }}
              >
                <CardBody>
                  <CardTitle style={{ textAlign: 'center' }}>
                    <h3>
                      Profile's Of : {mydata[0].first_name}
                      {mydata[0].last_name}
                    </h3>
                  </CardTitle>

                  <CardText>
                    <p>
                      <h2>Name: </h2>
                      {mydata[0].first_name} {mydata[0].last_name}
                    </p>
                    <br />
                    <p>
                      <h2>Email:</h2>
                      {mydata[0].email}
                    </p>
                    <p>
                      <h2>Role:</h2> {idRole(mydata[0].id_role)}
                    </p>
                    <p>
                      <h2>Genre:</h2>
                      {idGenre(mydata[0].id_genre)}
                    </p>
                    <p>
                      <h2>Experience:</h2>
                      {mydata[0].experience} Years
                    </p>
                    <p>
                      <h2>About mySelf:</h2>
                      {mydata[0].about}
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card>
                <h2>Demo Music</h2>
                <iframe
                  title='media-youtube'
                  width='100%'
                  height='315'
                  src={`https://www.youtube.com/embed/vxkl0kKXnHY`}
                ></iframe>
                <iframe
                  title='media-youtube1'
                  width='100%'
                  height='315'
                  // src={`${mydata[0].link_video}`}
                  src={'https://www.youtube.com/watch?v=oFEKYxjYDIc'}
                ></iframe>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h1>COMMENT's</h1>
              <Comment />
            </Col>
          </Row>
        </Fragment>
      )}
    </Container>
  );
}

// about: 'dfdfddgdgggfhgfhfgh';
// link_video: 'https://www.youtube.com/watch?v=oFEKYxjYDIc';
// status: 'on';
// created: '2020-03-01';
const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(functiongetUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProfile);

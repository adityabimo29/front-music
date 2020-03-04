import React, { useEffect } from 'react';
import '../assets/css/Profile.css';
import {
  Container,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody
} from 'reactstrap';
// import Picture from '../assets/images/01.jpg';
import { connect } from 'react-redux';
import { functiongetUsers } from '../actions';
// import jwt_decode from 'jwt-decode';

// import { Link } from 'react-router-dom';

function AllProfile(props) {
  // console.log(decode.id_user, 'ini id_user');
  useEffect(() => {
    props.getUsers();
  }, []);

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

  return (
    <div>
      <Container>
        {props.profile.map((item, id) => (
          <Card key={id}>
            <CardBody>
              <CardTitle>Profile</CardTitle>
              <CardSubtitle>
                Welcome :{item.first_name} {item.Cardlast_name}
              </CardSubtitle>
              <CardText>
                <p>
                  Name: {item.first_name} {item.last_name}
                </p>
                <br />
                <p>Email:{item.email} </p>
                <p>Role: {idRole(item.id_role)} </p>
                <p>Genre:{idGenre(item.id_genre)} </p>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AllProfile);

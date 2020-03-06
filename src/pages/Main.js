import React, { Component } from 'react';
import '../assets/css/Main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
// import Logo from '../assets/images/logo.png';
import pic1 from '../assets/images/default.png';
import { connect } from 'react-redux';
import { fetchDataUsers, userLike } from '../actions/users.Actions';
import { withRouter } from 'react-router';
import jwt from 'jwt-decode';
import Header from '../components/Header';

class Main extends Component {
  componentDidMount() {
    this.props.showData();
  }

  handleLike = id_user => {
    const token = localStorage.getItem('token');
    let decode = jwt(token);
    let data = {
      id_user: id_user,
      id_visitor: decode.id_user
    };
    this.props.addLike(data, this.props.history);
  };

  render() {
    // VARIABLE FOR LIBRARY REACT SWIPER JS
    const params = {
      effect: 'coverflow',
      dots: false,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    return (
      <div>
        <Header />
        <Container fluid className='MainContainer'>
          <Row>
            <Swiper {...params}>
              {this.props.datas.map(item => {
                if (item.avatar === '') {
                  item.avatar = pic1;
                }
                return (
                  <Col md={4} key={item.id_user}>
                    <Card bg='dark' className='Cards'>
                      <Card.Img
                        variant='top'
                        src={item.avatar}
                        className='CardImages'
                      />
                      <Card.Body style={{ backgroundColor: '#343A40' }}>
                        <Card.Title className='CardName'>
                          {`${item.first_name} ${item.last_name}`}
                        </Card.Title>
                        <Card.Text>
                          Music : {item.genre}
                          <br />
                          Role : {item.role}
                        </Card.Text>
                        <Row>
                          <Col>
                            <button
                              className='btn btn-primary btn-block'
                              onClick={() => this.handleLike(item.id_user)}
                            >
                              <i
                                className='fa fa-thumbs-o-up fa-3x'
                                aria-hidden='true'
                              ></i>
                            </button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    datas: state.users.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showData: () => dispatch(fetchDataUsers()),
    addLike: (data, history) => dispatch(userLike(data, history))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

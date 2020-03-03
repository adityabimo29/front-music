import React, { Component } from 'react';
import '../assets/css/Main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
// import Logo from '../assets/images/logo.png';
import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import { connect } from 'react-redux';
import { fetchDataUsers } from '../actions/users.Actions';

class Main extends Component {

  componentDidMount() {
    this.props.showData();
    
  }

  handleLike = () => {
    alert('adsas')
  }
  
  render() {
    
    // VARIABLE FOR LIBRARY REACT SWIPER JS
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    return (
      <div>
        <Container fluid className='MainContainer MainBG'>
          <Row>
            <Swiper {...params}>
              {this.props.datas.map(item => {
                return (
                  <Card bg='dark' className='Cards' key={item.id_user}>
                  <Card.Img variant='top' src={pic1} className='CardImages' />
                  <Card.Body>
                    <Card.Title className='CardName'>{item.first_name}</Card.Title>
                    <Card.Text>
                      Music : Rock
                      <br />
                      Role : Guitarist
                    </Card.Text>
                  </Card.Body>
                  </Card>
                )
              })}
            </Swiper>
          </Row>
          <Row>
            <Col className='ButtonContainer'>
              <button onClick={this.handleLike}>
                <i className='fa fa-thumbs-o-up fa-3x' aria-hidden='true'></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    datas:state.users.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showData:() => dispatch(fetchDataUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
import React, { Component } from 'react';
import '../assets/css/Profile.css';
import { Container, Row, Col } from 'react-bootstrap';
import Picture from '../assets/images/01.jpg';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xl={{ span: 4 }} className='ProfilePictureContainer'>
              <img src={Picture} alt='Profile Picture' />
            </Col>
            <Col xl className='Profile'>
              <h1>John Snow</h1>
              <Row className='ProfileHeader'>
                <h3>Experience</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>3 Years</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Genre</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>Rock</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Role</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>Guitarist</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Biography</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore eligendi provident sapiente officia quasi reprehenderit
                  debitis repellendus inventore quia doloribus vero, amet, error
                  aut delectus accusamus a omnis? Dolorum, cumque!
                </p>
              </Row>
              <Row>
                <Col className='RecruitContainer'>
                  <button className='RecruitButton'>RECRUIT</button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='MediaContainer'>
              <h1>Media</h1>
              <Row>
                <Col>
                  <iframe
                    width='420'
                    height='315'
                    src={`https://www.youtube.com/embed/QvsQ9hYKq7c`}
                  ></iframe>
                </Col>
              </Row>
            </Col>
            <Col className='CommentContainer'>
              <h1>Comment</h1>
              <Row>
                <Col className='CommentSection'>
                  <p>
                    <h5>Post by: Jesky</h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Placeat asperiores totam enim inventore incidunt, quod
                    necessitatibus provident pariatur molestiae consequatur,
                    unde nam obcaecati odit reiciendis hic aspernatur tempore.
                    Molestiae, cum.
                  </p>
                  <p>
                    <h5>Post by: Aditya</h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique quis consectetur libero in, fugit sit delectus eos
                    veritatis unde veniam, amet exercitationem non rem provident
                    adipisci sed temporibus mollitia molestiae.
                  </p>
                  <p>
                    <h5>Post by: Arya Stark</h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto magni, modi quos, illum atque nihil praesentium
                    quibusdam hic, sunt consectetur tempore consequuntur eum.
                    Voluptatibus consectetur ut, ipsa beatae maxime quam.
                  </p>
                  <p>
                    <h5>Post by: Mariah Carrey</h5>
                    Jesky Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Consectetur harum laboriosam voluptas reiciendis ad
                    rem, aut voluptatem eius, aliquam earum vel omnis laborum
                    alias voluptatibus. Et earum modi eos animi.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

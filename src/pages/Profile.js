import React, { Component } from 'react';
import '../assets/css/Profile.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Picture from '../assets/images/01.jpg';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xl={{ span: 4 }} className='ProfilePictureContainer'>
              <img src={Picture} alt='Profile' />
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
            <Col xl className='MediaContainer'>
              <h1>Media</h1>
              <Row>
                <Col>
                  <iframe
                    title='media-youtube'
                    width='100%'
                    height='315'
                    src={`https://www.youtube.com/embed/vxkl0kKXnHY`}
                  ></iframe>
                </Col>
              </Row>
            </Col>
            <Col className='CommentContainer'>
              <h1>Comments</h1>
              <Row>
                <Col className='CommentSection'>
                  <h5>Post by: Jesky</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Placeat asperiores totam enim inventore incidunt, quod
                    necessitatibus provident pariatur molestiae consequatur,
                    unde nam obcaecati odit reiciendis hic aspernatur tempore.
                    Molestiae, cum.
                  </p>
                  <h5>Post by: Aditya</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique quis consectetur libero in, fugit sit delectus eos
                    veritatis unde veniam, amet exercitationem non rem provident
                    adipisci sed temporibus mollitia molestiae.
                  </p>
                  <h5>Post by: Arya Stark</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto magni, modi quos, illum atque nihil praesentium
                    quibusdam hic, sunt consectetur tempore consequuntur eum.
                    Voluptatibus consectetur ut, ipsa beatae maxime quam.
                  </p>
                  <h5>Post by: Mariah Carrey</h5>
                  <p>
                    Jesky Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Consectetur harum laboriosam voluptas reiciendis ad
                    rem, aut voluptatem eius, aliquam earum vel omnis laborum
                    alias voluptatibus. Et earum modi eos animi.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xl>
              <Form>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label className='PostComment'>
                    <h1>Post Comment</h1>
                    <p>
                      Once you post a comment, you will never be able to update
                      or delete it. Please be careful with whatever you are
                      going to comment.
                      <br />
                      Comments are visible to all visitor on this profile page.
                    </p>
                  </Form.Label>
                  <Form.Control as='textarea' rows='5' />
                  <Button className='PostButton'>Submit Post</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React, { Component } from 'react';
import '../assets/css/Profile.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Picture from '../assets/images/default.jpg';
import { fetchProfile, sendEmail , getComments , PostComments} from '../actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import jwt from 'jwt-decode';

class Profile extends Component {

  state = {
    message:''
  }
  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  handleRecruit = email => {
    const token  = localStorage.getItem('token');
    let decode  = jwt(token);
    let data = {
      emailTo: email,
      first_name:decode.first_name,
      email:decode.email
    };
    this.props.sendMail(data, this.props.history);
  }

  handleComment = () => {
    const token  = localStorage.getItem('token');
    let decode  = jwt(token);
    let data = {
      id_user: this.props.profile.id_user,
      id_guest:decode.id_user,
      name:decode.first_name,
      message:this.state.message
    };
    this.props.PostComments(data);
  }

  handleMessage = (e) => {
    this.setState({message:e.target.value})
  }

  render() {
    
    const {
      first_name,
      genre,
      role,
      about,
      avatar,
      email,
      last_name,
      link_video,
      experience
    } = this.props.profile;
    let gambar = avatar;
    if (gambar === undefined) {
      gambar = Picture;
    }
    return (
      <div>
        <Header />
        <Container className='ProfileContainer'>
          <Row>
            <Col sm className='ProfilePictureContainer'>
              <img src={gambar} alt='Profile' />
            </Col>
            <Col xl className='Profile'>
              <h1>{first_name} {last_name}</h1>
              <Row className='ProfileHeader'>
                <h3>Experience</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>{experience} Years</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Genre</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>{genre}</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Role</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>{role}</p>
              </Row>
              <Row className='ProfileHeader'>
                <h3>Biography</h3>
              </Row>
              <Row className='ProfileArticle'>
                <p>{about}</p>
              </Row>
              <Row>
                <Col className='RecruitContainer'>
                  <button
                    className='RecruitButton'
                    onClick={() => this.handleRecruit(email)}
                  >
                    RECRUIT
                  </button>
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
                    src={`https://www.youtube-nocookie.com/embed/${link_video}`}
                  ></iframe>
                </Col>
              </Row>
            </Col>
            <Col className='CommentContainer'>
              <h1>Comments</h1>
              <Row>
                <Col className='CommentSection'>
                  {this.props.comments.map(item => {
                    return (
                        <div key={item.id_guest}>
                        <h5>Post by: {item.name}</h5>
                        <p>
                          {item.message}
                        </p>
                        </div>
                    )
                  })}
                  {this.props.comments.length <= 0 ? 'Comments Not Found' : ''}
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
                  <Form.Control as='textarea' rows='5' onChange={this.handleMessage} value={this.state.message} />
                  <Button className='PostButton' onClick={this.handleComment}>Submit Post</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.users.profile,
    comments:state.users.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: id_user => dispatch(fetchProfile(id_user)),
    sendMail: (email, history) => dispatch(sendEmail(email, history)),
    getComments:(id_user) => dispatch(getComments(id_user)),
    PostComments:(data) => dispatch(PostComments(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);

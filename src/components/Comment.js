import React, { useState, useEffect } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Alert
} from 'reactstrap';
import uuid from 'react-uuid';
// import Myformik from './Myformik';
import { Formik } from 'formik';
import * as yup from 'yup';
// import moment from 'moment';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { functiongetUsers } from '../actions';

function Comment(props) {
  const [items, setItems] = useState([{ id: uuid(), email: '', comment: '' }]);
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const mytoken = localStorage.getItem('token');
  const decode = jwt_decode(mytoken);
  console.log(decode);
  useEffect(() => {
    props.getUsers();
  }, []);
  // useEffect(() => {
  //   props.getUsers();
  // }, []);
  console.log(items);

  var today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  var timeday = new Date().toString().split(' ')[4];

  const myName = decode.first_name + ' ' + decode.last_name;
  return (
    <div>
      <Container>
        {/* <Button
          color='dark'
          style={{ marginBotom: '2rem' }}
          onClick={() => {
            const name = prompt('Please enter name:');
            if (name != null) {
              setItems(() => [...items, { id: uuid(), name }]);
            }
          }}
        >
          Add Item
        </Button> */}
        {/*diganti modal */}
        <div>
          <Button color='danger' onClick={toggle}>
            Comment
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Add Your Comment</ModalHeader>
            <ModalBody>
              <Formik
                initialValues={{ email: myName, comment: '' }}
                onSubmit={async values => {
                  await new Promise(resolve => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                  console.log(values);

                  setItems([...items, { ...values, id: uuid() }]);
                }}
                validationSchema={yup.object().shape({
                  youremail: yup.string(),
                  comment: yup.string().required('Required')
                })}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <label htmlFor='comment' style={{ display: 'block' }}>
                        Your Comment :
                      </label>
                      <br />
                      <input
                        htmlFor='youremail'
                        style={{ display: 'block' }}
                        name='email'
                        type='email'
                        value={values.email}
                        disabled={true}
                      />

                      <input
                        id='comment'
                        placeholder='type your comment'
                        type='text'
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.comment && touched.comment
                            ? 'text-input'
                            : 'text-input error'
                        }
                      />
                      {errors.comment && touched.comment && (
                        <div className='input-feedback'>{errors.comment}</div>
                      )}

                      <Button
                        type='button'
                        className='outline'
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </Button>
                      {'     '}
                      <Button
                        type='submit'
                        disabled={isSubmitting}
                        onClick={toggle}
                      >
                        Submit
                      </Button>

                      {/* <DisplayFormikState {...props} /> */}
                    </form>
                  );
                }}
              </Formik>
            </ModalBody>
          </Modal>
        </div>

        <ListGroup>
          {items.map(({ id, email, comment }) => (
            <ListGroupItem key={id} className='lg'>
              <Alert
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
                color='primary'
              >
                <p>{email}</p>{' '}
                <p>
                  posted on : {today} {timeday}{' '}
                </p>
              </Alert>
              <br />
              <p>{comment}</p>
              <Button
                className='remove-btn'
                size='sm'
                color='danger'
                onClick={() => {
                  setItems(state => ({
                    items: state.items.filter(item => item.id !== id)
                  }));
                }}
              >
                x
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}
//format('LLLL'
// m =
//m = moment('2013-03-01', 'YYYY-MM-DD')
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

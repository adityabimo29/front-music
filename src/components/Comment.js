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
import { functgetItem, functaddItem } from '../actions';

function Comment(props) {
  // const [items, setItems] = useState([
  //   { id_comment: null, id_user: null, name: '', message: '' }
  // ]);
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const mytoken = localStorage.getItem('token');
  const decode = jwt_decode(mytoken);
  console.log(props, 'props');

  //ambil comment
  useEffect(() => {
    props.getItems();
  }, []);
  // useEffect(() => {
  //   props.getUsers();
  // }, []);

  var today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  var timeday = new Date().toString().split(' ')[4];

  const myName = decode.first_name + ' ' + decode.last_name;
  var myIdUser = decode.id_user;

  console.log(props);
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
                initialValues={{ name: myName, message: '', id_user: myIdUser }}
                onSubmit={async values => {
                  // ini utk isi di database
                  props.addItems(values);
                  await new Promise(resolve => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));

                  // ini cara ini hanya utk di array
                  // dan bukan utk di database
                  // setItems([
                  //   ...items,
                  //   {
                  //     ...values,
                  //     id_user: myIdUser,
                  //     name: values.myName,
                  //     message: values.comment
                  //   }
                  // ]);
                }}
                validationSchema={yup.object().shape({
                  id_user: yup.number(),
                  name: yup.string(),
                  message: yup.string().required('Required')
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
                      <label htmlFor='name' style={{ display: 'block' }}>
                        Your Comment :
                      </label>
                      <br />
                      <input
                        htmlFor='id_user'
                        style={{ display: 'block' }}
                        name='id_user'
                        type='number'
                        value={values.id_user}
                        disabled={true}
                      />
                      <input
                        htmlFor='name'
                        style={{ display: 'block' }}
                        name='name'
                        type='text'
                        value={values.name}
                        disabled={true}
                      />

                      <input
                        id='message'
                        name='message'
                        placeholder='type your comment'
                        type='text'
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.message && touched.message
                            ? 'text-input'
                            : 'text-input error'
                        }
                      />
                      {errors.message && touched.message && (
                        <div className='input-feedback'>{errors.message}</div>
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

        {/* <ListGroup>
          {items.map(({ id_comment, name, message }) => (
            <ListGroupItem key={id_comment} className='lg'>
              <Alert
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
                color='primary'
              >
                <p>{name}</p>{' '}
                <p>
                  posted on : {today} {timeday}{' '}
                </p>
              </Alert>
              <br />
              <p>{message}</p>
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
          ))} */}
        {/*  start*/}
        <ListGroup>
          {props.items === undefined ? (
            <ListGroupItem>
              <Alert
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
                color='primary'
              >
                {' '}
                COMMENT TO BE POSTED
              </Alert>
            </ListGroupItem>
          ) : (
            props.items.map(({ id_comment, name, message }) => (
              <ListGroupItem key={id_comment} className='lg'>
                <Alert
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                  color='primary'
                >
                  <p>{name}</p>{' '}
                  <p>
                    posted on : {today} {timeday}{' '}
                  </p>
                </Alert>
                <br />
                <p>{message}</p>
                <Button
                  className='remove-btn'
                  size='sm'
                  color='danger'
                  onClick={() => {
                    // setItems(state => ({
                    //   items: state.items.filter(
                    //     item => item.id_comment !== id_comment
                    //   )
                    // }));
                  }}
                >
                  x
                </Button>
              </ListGroupItem>
            ))
          )}

          {/*end */}
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
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(functaddItem(values));
  return {
    getItems: () => {
      dispatch(functgetItem());
    },
    addItems: values => {
      dispatch(functaddItem(values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

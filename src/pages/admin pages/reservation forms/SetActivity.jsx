import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SetActivity.css';

const SetActivity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  const [newForm, setNewForm] = React.useState(formData)
  const params = useParams();
  console.log(newForm)

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewForm({ ...newForm, [name]: value });
  };

  const handleBackClick = () => {
    navigate(`/admin/reserve/${params.id}`);
  };

  const handleNextClick = () => {
    navigate(`/admin/reservation-confirmation/${params.id}`, { state: { formData: newForm } });
  };

  return (
    <div className="set-activity-page">
      <Container className='reserve-form-container'>
        <Row className="align-items-center justify-content-center reserve-row">
          <Row className='reserve-header mb-4'>
            <h3> Set Activity <span> (Optional) </span></h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="titleInput">
              <Form.Control name="title" onChange={handleFormChange} type="text" placeholder="Title" style={{ width: '400px', backgroundColor: '#F4F4F4' }} />
            </Form.Group>
            <hr style={{ width: '45%', margin: '11px', paddingBottom: '10px' }} />
            <Form.Group className="mb-3" controlId="instructionsInput">
              <Form.Control name="description" onChange={handleFormChange} as="textarea" rows={3} placeholder="Enter something" style={{ width: '560px', height: '320px', backgroundColor: '#F4F4F4', resize: 'none' }} ></Form.Control>
            </Form.Group>
          </Row>
          <Row className=''>
            <Col md={6}>
            </Col>
            <Col>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button' style={{ backgroundColor: '#E6E6E6', border: 'none', color: '#414141' }} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button' style={{ backgroundColor: '#2C5225', border: 'none' }} onClick={handleNextClick}>Next</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SetActivity;

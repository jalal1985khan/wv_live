import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNotEmpty, setIsNotEmpty] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || !isValidEmail) {
      setIsNotEmpty(email.trim() !== '');
      return;
    }

    try {
      const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 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`, // Replace with your SendGrid API key
        },
        body: JSON.stringify({
          list_ids: ['ff61f48a-8aa5-4fc4-9d9d-3a8563f252f7'], // Replace with your SendGrid contact list ID
          contacts: [{ email }],
        }),
      });

      if (response.ok) {
        // Add any success handling here
        console.log('Contact saved successfully');
        setIsSent(true)
      } else {
        // Add error handling here
        console.error('Failed to save contact');
        setIsSent(false)
      }
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  return (
    <Container fluid className='pt-5'>
      <Container className="newsletter mb-5">
        <Row className="new_l">
          <Col lg={5} sm={12}>
            <p className="n_text bogle-medium">Subscribe to the Walmart Vriddhi newsletter</p>
          </Col>
          <Col lg={3} sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  className={`subscriber ${!isValidEmail || !isNotEmpty ? 'is-invalid' : ''}`}
                  placeholder="Enter email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                {isSent ? 'Subscribed successfully' : (
                <>
                {!isValidEmail && <Form.Text className="text-danger">Invalid email format</Form.Text>}
                    {!isNotEmpty && <Form.Text className="text-danger">Email cannot be empty</Form.Text>}
                  </>
                )
              }
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2} sm={12}>
            <Button variant="outline-primary subs-btn" onClick={handleSubmit}>
              Join us
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NewsletterForm;
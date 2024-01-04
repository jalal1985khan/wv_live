// NewsletterForm.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const sendEmail = async (to, subject) => {
  try {
    // Set your SendGrid API key
    const apiKey = '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'; // Replace with your SendGrid API key

    // SendGrid API endpoint
    const sendGridEndpoint = 'https://api.sendgrid.com/v3/mail/send';

    // Create the email payload
    const emailPayload = {
      personalizations: [
        {
          to: [{ email: to }],
          dynamic_template_data:'',
        },
      ],
      from: { email: 'contactus@walmartvriddhi.org' }, // Replace with your email here
      subject: subject,
      template_id:'d-928effde4f674ad8b95ea8d8020051d5',
    };

    // Make the API request to SendGrid
    const response = await fetch(sendGridEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('Email sent successfully:', responseData);
      return responseData;
    } else {
      console.error('Error sending email:', responseData);
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

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
      // Save contact
      const apiKey = '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'; // Replace with your SendGrid API key
      const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`, // Replace with your SendGrid API key
        },
        body: JSON.stringify({
          list_ids: ['ff61f48a-8aa5-4fc4-9d9d-3a8563f252f7'], // Replace with your SendGrid contact list ID
          contacts: [{ email }],
        }),
      });

      if (response.ok) {
        // Contact saved successfully, now send email
        const templateId = 'd-928effde4f674ad8b95ea8d8020051d5'; // Replace with your SendGrid template ID
        const dynamicTemplateData = { /* Add your template variables here */ };

        await sendEmail(email, 'Your Email Subject', templateId);
        // Set state to indicate successful subscription
        setIsSent(true);
      } else {
        // Add error handling here
        console.error('Failed to save contact');
        setIsSent(false);
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
    <Container fluid className='pt-5 g-0'>
      <Container className="newsletter mb-5 m-center">
        <Row className="new_l">
          <Col lg={5} sm={12}>
            <p className="n_text">Subscribe to the Walmart Vriddhi newsletter</p>
          </Col>
          <Col lg={4} sm={12}>
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
                )}
              </Form.Group>
            </Form>
          </Col>
          <Col lg={3} sm={12} className='m-center'>
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
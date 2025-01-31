import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5">
      {/* <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4 border-0 rounded-3">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
              </Form.Group>

              <Button variant="primary" className="w-100" type="submit">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row> */}

      <Row className="mt-5 text-center">
        <Col md={4}>
          <h5>Call or WhatsApp</h5>
          <p>📞 +91 9353131613</p>
          <p>📞 +91 6337658197</p>
        </Col>
        <Col md={4}>
          <h5>Email</h5>
          <p>📧 pradeep@flyingchariot.co.in</p>
        </Col>
        <Col md={4}>
          <h5>Instagram</h5>
          <p>📸 @FLYING_CHARIOT.CO.IN</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h4 className="text-center mb-3">Find Us on Map</h4>
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

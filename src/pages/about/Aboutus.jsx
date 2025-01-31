import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


const Aboutus = () => {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold">The Factory That Spoke: The Story of Flying Chariot Clothing</h2>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src='https://img.freepik.com/free-photo/young-man-with-shopping-bags-looking-camera_23-2148316512.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt="Factory" fluid className="rounded-3 shadow" />
        </Col>
        <Col md={6}>
          <h3>The “Flying Chariot Mill”</h3>
          <p>
            In the heart of Ludhiana, there stood a small factory. Its machines hummed day and night,
            churning out the same uninspired, monotonous clothes for years. It was as if the building itself
            had surrendered to mediocrity.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          <Image src='https://img.freepik.com/free-photo/front-view-friends-with-skateboards_23-2148264200.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt="Dreamers" fluid className="rounded-3 shadow" />
        </Col>
        <Col md={6}>
          <h3>The Question That Sparked a Revolution</h3>
          <p>
            One fateful night, a young, overworked employee—frustrated by the monotony—scribbled three words on a fabric roll:
            “Why so boring?” That rebellious act lit a spark, inspiring change within the factory.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src='https://img.freepik.com/free-photo/man-fashionable-shop-checking-plaid-shirt_23-2148175637.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid' alt="Creativity" fluid className="rounded-3 shadow" />
        </Col>
        <Col md={6}>
          <h3>The Birth of Flying Chariot Clothing</h3>
          <p>
            A group of dreamers saw an opportunity and transformed the factory into a creative sanctuary,
            brimming with bold patterns and wearable art. The once lifeless factory became a hub of innovation.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <h3>Our Mission: Take Flight from the Ordinary</h3>
          <p>
            Whether you’re lounging, strutting, or chasing your dreams, Flying Chariot Clothing reminds you:
            the ordinary is just a launchpad, and the extraordinary is where you’re meant to soar.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;

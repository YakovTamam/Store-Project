import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCleanHands } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <strong
              style={{ textShadow: "var(--blue) 0 0 10px", color: "white" }}
            >
              Copyright &copy; Professional Clean
            </strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

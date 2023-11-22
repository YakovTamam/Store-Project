import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCleanHands } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <strong style={{ color: "var(--blue)" }}>
              Copyright &copy; Professional <MdCleanHands /> Clean
            </strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

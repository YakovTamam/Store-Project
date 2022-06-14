import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiDiamondTrophy } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <strong>
              Copyright &copy; Asser <GiDiamondTrophy /> Store
            </strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

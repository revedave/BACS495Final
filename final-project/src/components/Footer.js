import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#A30000", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        David's Future Website's Name
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Me</Heading>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
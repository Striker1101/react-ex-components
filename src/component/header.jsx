import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import {  Image , Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";

export default function header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Community your Fans will Love</h1>
            <p>
              Huddle re-imagine the way we build communities. you have a voice,
              but so does the audience. Create connections with your users as
              you engage in genuine discussions.
            </p>
            <Button bg="#ff0099" color="#fff">
              {" "}
              Get Started for Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

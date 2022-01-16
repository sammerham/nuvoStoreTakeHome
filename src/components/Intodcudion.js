import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledMainTitle,
  StyledIntroParag,
} from './StyledComponents'


/*
 * ItemDetails
 *
 * This is the page where you rednder main title and main paragrgraph
 * State: None
 * props:None  
 * App ---->> Intodcudion
 */



function Intodcudion() {
  return (
    <Container >
      <Row>
        <Col>
          <StyledMainTitle bg='teal'>
            Nuvo Store
          </StyledMainTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <StyledIntroParag bg='#1f3d3c'>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Laborum ipsum laudantium possimus dolore atque
            perspiciatis quisquam,quasi nemo quis ipsam sunt
            dolorem molestiaeporro officiis.Deleniti ipsa tenetur
            aspernatur sunt?
          </StyledIntroParag>
        </Col>
      </Row>
    </Container>
  )
}

export default Intodcudion

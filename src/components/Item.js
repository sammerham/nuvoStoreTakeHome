import { React, useContext } from 'react'
import StoreContext from '../storeContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  IoChevronForwardCircle,
  IoChevronBackCircleOutline,
} from 'react-icons/io5';

import {
  StyledImage,
  StyledItemTitle,
} from './StyledComponents'



/*
 * Media Item
 *
 * This is the page where you rednder all info about single item
 * State: None
 * props:
      *item 
            {
              "id": 1,
              "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              "price": 109.95,
              "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              "category": "men's clothing",
              "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              "rating": {
                "rate": 3.9,
                "count": 120
            }
}
  
 * App ---->> ItemList ----> Item
 */
function Item({ item }) {

  const { title, image } = item;
  const {
    setCurrItem,
    setCurrItemClicked,
    clickedId,
    setClickedId } = useContext(StoreContext);

 

// handle click fn for img , icon, title
  const handleClick = () => {
    if (clickedId === item.id) {
      setClickedId(null)
      setCurrItemClicked(false)
    } else {
      setClickedId(item.id);
      setCurrItem(i => item);
      setCurrItemClicked(true);
    }
  };


  return (
    <Container>
      <Row xs={4}>
        <Col xs={4}>
            <StyledImage
            src={image}
              alt="product"
              role="test-img"
            onClick={handleClick}
            style={{marginRight:'500px'}}
          />
          </ Col>
        <Col xs={4}>
          <StyledItemTitle
            style={{ color: clickedId === item.id ? 'purple' : 'black'}}
            onClick={handleClick}
            >
            {title}
            </StyledItemTitle>
            </ Col >
        <Col xs={4}>
          {clickedId === item.id
            ?
            <IoChevronForwardCircle
              onClick={handleClick}
              size={"70px"}
              color={'teal'}
              cursor={'pointer'}
              style={{ marginLeft: '80px' }}
            />
            :
            <IoChevronBackCircleOutline
              onClick={handleClick}
              size={"70px"}
              cursor={'pointer'}
              color={'teal'}
              style={{ marginLeft: '80px' }}
            />
              }
            </Col>
          </Row>
    </Container>
  )
}

export default Item

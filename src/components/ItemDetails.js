import { React, useContext } from 'react';
import StoreContext from '../storeContext';
import ReactStars from 'react-stars'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { StyledratingSpan } from './StyledComponents'



/*
 * ItemDeals
 *
 * This is the page where you rednder details about single item
 * State: None
 * props:None
  
 *  * App ---->> ItemList ----> Item ----> itemDetails
 */


function ItemDetails() {
  const { currItem, setCurrItemClicked, setClickedId } = useContext(StoreContext);
  const { price, description, rating } = currItem;
  

  //fn handle click on details box add to cart button
  const handleClick = () => {
    // add to cart;
    // set curritems click to false to go back to main item list 
    setCurrItemClicked(false);
    setClickedId(null)
  }

  return (

    <Card
      className="text-center"
      style={{ width: '400px', height:'500px',marginTop:'80px', marginLeft:'30px'}}
    >
      <Card.Body>
        <Card.Title>
          ${price}
        </Card.Title>
        <br />
        <Card.Text>
          {description}
        </Card.Text>
        <StyledratingSpan>
            <ReactStars
              count={5}
              value={rating.rate}
              color2={'#ffd700'}
              edit={false}
          />
            ({rating.count})
        </StyledratingSpan>
        <br />
        <Button
          onClick={handleClick}
          variant="primary"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ItemDetails

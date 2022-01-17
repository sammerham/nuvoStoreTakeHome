import { React, useState, useEffect } from 'react';
import StoreContext from './storeContext';
import axios from 'axios';
import Intodcudion from './components/Intodcudion';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const URL = 'https://fakestoreapi.com/products?limit=5'


/*
 * App
 *
 * This is the page where you rednder app.
 * State: 
 *      Prooducts: [{}, {}, ....]
 *      CurrItem : {}
 *      currItemClicked Boolean
 *      clickedId :id
 * props:
        None
  
 * App 
 */


function App() {

  const [products, setProducts] = useState([]);
  const [currItem, setCurrItem] = useState(null);
  const [currItemClicked, setCurrItemClicked] = useState(false);
  const [clickedId, setClickedId] = useState(null);


  //side effect to get products from api on load;
  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get(URL);
      setProducts(data => products.data);
    };
    fetchProducts();
  }, []);



  return (
    <StoreContext.Provider value=
      {{
        products,
        currItem,
        currItemClicked,
        setCurrItem,
        setCurrItemClicked,
        clickedId,
        setClickedId
      }}
    >
      <div style={{ backgroundColor: 'lightgray' }}>
        <Container >
          <Row>
            <Col>
              <Intodcudion />
            </Col>
          </Row>
          <Row>
            <Col sm md={6}>
              <ItemList />
            </Col>
            <Col sm md={6}>
              {clickedId && clickedId === currItem.id
                ?
                <ItemDetails />
                :
                null
              }
            </Col>
          </Row>
        </Container>
      </div>
    </ StoreContext.Provider >
  );
}

export default App;

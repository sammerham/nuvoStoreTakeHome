import { React, useContext } from 'react';
import StoreContext from '../storeContext';
import Item from './Item';

/*
 * ItemList
 *
 * This is the page where you rednder list of all items
 * State: None
 * props:
      *None
 * App ---->> ItemList
 */

function ItemList() {
  const { products  } = useContext(StoreContext);

  
  return (
    <div>
        {products.map(i => <Item item={i} key={i.id} />)}
    </div>
  )
}

export default ItemList

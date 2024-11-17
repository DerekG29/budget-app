import ItemCard from "../ItemCard";

import './ItemList.css';

function ItemList() {
  return (
    <div className="list-wrapper">
      <ItemCard
        price={'600'}
        itemName={'Rent'}
        category={'Housing'}
      />
      <ItemCard
        price={'345'}
        itemName={'Car'}
        category={'Auto'}
      />
    </div>
  )
}

export default ItemList;
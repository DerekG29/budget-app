import ItemCard from "../ItemCard";
import data from '../../data/data.js'

import './ItemList.css';

function ItemList() {
  return (
    <div className="list-wrapper">
      {
        data.map(item => {
          return <ItemCard
            key={item.id}
            price={item.price}
            itemName={item.name}
            category={item.category}
          />
        })
      }
    </div>
  )
}

export default ItemList;
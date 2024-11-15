import ItemCard from "../ItemCard";

function ItemList() {
  return (
    <div>
      <ItemCard
        price={'600'}
        itemName={'Rent'}
        category={'Home'}
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
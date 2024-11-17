import './ItemCard.css';

function ItemCard(props) {
  const { price, itemName, category } = props;

  return (
    <div className="card">
      <div className="card-price">
        <h2>${price}</h2>
      </div>
      <div className="card-header">
        <h2>{itemName}</h2>
        <h3>{category}</h3>
      </div>
      <div className="card-options">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default ItemCard;
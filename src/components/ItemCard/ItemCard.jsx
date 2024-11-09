import './ItemCard.css';

function ItemCard() {
  return (
    <div className="card">
      <div className="card-price">
        <p>$419</p>
      </div>
      <div className="card-header">
        <h2>Item</h2>
        <h3>Category</h3>
      </div>
      <div className="card-options">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default ItemCard;
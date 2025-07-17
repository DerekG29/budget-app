import { useEffect, useState } from 'react';
import ItemCard from "../ItemCard";
import "./ItemList.css";

async function getData() {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

function ItemList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const json = getData();
    setData(json);
  }, []);

  return (
    <div className="list-wrapper">
      {
        data?.map(item => {
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
};

export default ItemList;
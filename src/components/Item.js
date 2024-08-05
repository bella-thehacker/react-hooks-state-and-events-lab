import React,{useState} from "react";

function Item({ name, category }) {

  const [add, addToCart] = useState(false)

  function addToList(){
    addToCart(!add)
  }
  return (
    <li className={ add ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToList}>
        {add ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

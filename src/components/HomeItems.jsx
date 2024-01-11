import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FaCartPlus } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";

 function HomeItems({item}){

    const dispatch=useDispatch();
    const bagItems=useSelector(store=>store.bag);

    const elementIsFound=bagItems.indexOf(item.id) >=0;

    const handleToClick=()=>{
        dispatch(bagActions.addToBag(item.id))

    }

    const handleClickRemove=()=>{
        dispatch(bagActions.removeFromBag(item.id))
    }
return <>
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementIsFound?<button className="btn-add-bag btn btn-danger" onClick={handleClickRemove}><IoBagRemoveSharp /> Remove</button>:<button className="btn-add-bag btn btn-success" onClick={handleToClick}><FaCartPlus /> Add to Bag</button>}
      
      
    </div>
</>
 }

 export default HomeItems;
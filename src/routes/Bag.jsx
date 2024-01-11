import { useSelector } from "react-redux";
import BagSummary from "../components/BagSummary";
import BagItems from "../components/Bagitems";


function Bag()
 {
 const bagItems=useSelector(state=>state.bag);
 const items=useSelector(state=>state.items);
 const finalItems=items.filter(item=>{
  const itemIndex=bagItems.indexOf(item.id);
  return itemIndex>=0;
 })
  return (
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map(item=><BagItems item={item}/>)}
          
        </div>
        <BagSummary/>
      </div>
    </main>
  );
}

export default Bag;

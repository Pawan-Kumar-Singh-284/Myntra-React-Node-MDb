import HomeItems from "../components/HomeItems";
import {useSelector} from "react-redux";

function Home() {
 const items=useSelector((store)=>store.items);
  return (
    <main>
      <div className="items-container">
        {items.map(item=><HomeItems item={item} key={item.id} />)}
        
      </div>
    </main>
  );
}

export default Home;

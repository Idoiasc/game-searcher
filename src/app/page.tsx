import Image from "next/image";
import MenuNav from "./components/MenuNav";
import Covers from "./components/Covers";

export default function Home() {
  return (
    <>
      <div>
    
        <MenuNav />

        <div  className='flex gap-5'>
          <Covers srcImage={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021"} altImage={""} />
          <Covers srcImage={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021"} altImage={""} />
        </div>
       
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
      </div>
    </>
    
  );
}

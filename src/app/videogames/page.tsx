import React from 'react';
import MenuNav from '../components/MenuNav';
import Covers from '../components/Covers';

const Videogames = () => {
  return (
    <>
        <MenuNav />

        <div className='py-5 px-5'>
          <Covers srcImage={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021"} altImage={""}/>
        </div>
    </>
  )
}

export default Videogames;

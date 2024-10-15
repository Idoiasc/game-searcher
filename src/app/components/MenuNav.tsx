'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import SearchBar from './SearchBar';

const MenuNav = () => {
  const pathname = usePathname();
  const isVideoGamesPage = pathname === '/videogames';
  const isLibrary = pathname === '/library';

  return (
    <>
        <div className='flex bg-zinc-900 w-full h-14 justify-between px-5'>
            <img
            className='py-5'
            src={""}
            alt={"Logo"}
            width={200}
            height={200}
            />
            <div className='w-1/4 py-2' >
                <SearchBar placeholder={"Buscar..."} />
            </div>

            <div className='flex'>
                <Link href="/library" className={`py-4 pr-5 ${isLibrary ? 'text-orange-500 font-semibold' : ''}`}>
                Biblioteca
                </Link>
                
                <Link href="/videogames" className={`py-4 pr-5 ${isVideoGamesPage ? 'text-orange-500 font-semibold' : ''}`}>
                  Videojuegos
                </Link>
                <FaRegUserCircle size={30} className='mt-3'/>
            </div>
        </div>
    </>
  )
}

export default MenuNav

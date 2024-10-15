import React from 'react'

const Covers = ({srcImage, altImage} :  any) => {
  return (
    <>
        <div>
            <img src={srcImage} alt={altImage} className='rounded-xl w-auto hover:scale-105 transition'/>
        </div>
    </>
  )
}

export default Covers

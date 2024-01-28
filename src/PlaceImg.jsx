import React from 'react'

const PlaceImg = ({place, index=0, className=null}) => {
    if(!place.photos?.length){
        return '';
    }
    // if(!className){
    //     className = 'w-full h-full object-cover';
    // }
  return (
    <div className='w-full h-full'>
        <img className = 'w-full h-full object-cover' src={'http://localhost:4000/uploads/'+place.photos[index]}/>
    </div>
    
  )
}

export default PlaceImg

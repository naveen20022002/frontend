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
        <img className = 'w-full h-full object-cover' src={'https://hotelbookingapp-67et.onrender.com/uploads/'+place.photos[index]}/>
    </div>
    
  )
}

export default PlaceImg

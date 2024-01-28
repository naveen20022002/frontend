import React, { useEffect, useState } from 'react'
import Perks from '../Perks';
import PhotoUploader from '../PhotoUploader';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import AccountNav from '../AccountNav';

const PlacesFormPage = () => {
  const {id} = useParams();

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [price, setPrice] = useState(100);

  useEffect(()=>{
    if(!id){
        return;
    }
    axios.get('/places/'+id).then((response)=>{
        const {data} = response;
        setTitle(data.title);
        setAddress(data.address)
        setAddedPhotos(data.photos)
        setDescription(data.description)
        setPerks(data.perks)
        setExtraInfo(data.extraInfo)
        setCheckIn(data.checkIn)
        setCheckOut(data.checkOut)
        setMaxGuests(data.maxGuests)
        setPrice(data.price)
    })
  }, [id])

  function inputHeader(text){
    return <h2 className='flex  text-2xl mt-4'>{text}</h2>
  }
  function inputDescription(text){
    return <p className='flex mb-6 text-gray-500 text-sm'>{text}</p>
  }
  function preInput(header, description){
    return(
      <>
      {inputHeader(header)}
      {inputDescription(description)}
      </>
    )
  }
  async function savePlace(ev){
    ev.preventDefault();
    const placeData = {title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price};
    if(id){
        await axios.put('/places', {
            id, ...placeData
        });
        setRedirect(true);
    }else{
        //new place
        await axios.post('/places', placeData);
        setRedirect(true);
    }
  }

  if(redirect){
    return <Navigate to={'/account/places'}/>
  }

  return (
    <div>
          <AccountNav/>
          <form onSubmit={savePlace}>
            {preInput('Title', 'Title for your place')}
            <input value={title} onChange={ev => {setTitle(ev.target.value)}} type="text" placeholder='title. for ex:My lovable place' />
            {preInput('Address', 'Address to this place')}
            <input value={address} onChange={ev => {setAddress(ev.target.value)}} type="text" placeholder='Address' />
            {preInput('Photos', 'more = better')}
            <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
            {preInput('Description', 'description of the place')}
            <textarea value={description} onChange={ev => {setDescription(ev.target.value)}} />
            {preInput('Perks', 'select all the perks for the place')}
            <div className='grid mt-2 gap-2 grid-cols-2 md:gris-cols-3 lg:grid-cols-6'>
              <Perks selected={perks} onChange={setPerks}/>
            </div>
            {preInput('Extra Info', 'House rules etc..')}
            <textarea value={extraInfo} onChange={ev => {setExtraInfo(ev.target.value)}}/>
            {preInput('Check In&Out times, Max guests', 'Add check in and out times and remember to have some time window for cleaning the rooms between the guests')}
            <div className='grid gap-2 grid-cols-2 md:grid-cols-4'>
              <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input value={checkIn} onChange={ev => {setCheckIn(ev.target.value)}} type="text" placeholder='14'/>
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input value={checkOut} onChange={ev => {setCheckOut(ev.target.value)}} type="text" placeholder='15'/>
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                <input value={maxGuests} onChange={ev => {setMaxGuests(ev.target.value)}} type="number"/>
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Price per night</h3>
                <input value={price} onChange={ev => {setPrice(ev.target.value)}} type="number"/>
              </div>
            </div>
            <button className='primary my-4'>Save</button>
          </form>
        </div>
  )
}

export default PlacesFormPage

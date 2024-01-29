import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './Pages/RegisterPage'
import axios from 'axios'
// import { useEffect } from 'react'
import { UserContextProvider } from './UserContext'
import ProfilePage from './Pages/ProfilePage'
import PlacesFormPage from './Pages/PlacesFormPage'
import PlacesPage from './Pages/PlacesPage'
import PlacePage from './Pages/PlacePage'
import BookingsPage from './Pages/BookingsPage'
import BookingPage from './Pages/BookingPage'

// https://hotelbooking2.onrender.com
axios.defaults.baseURL = 'https://hotelbookingapp-67et.onrender.com';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path= '/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/account' element={<ProfilePage/>}/>
        <Route path='/account/places' element={<PlacesPage/>}/>
        <Route path='/account/places/new' element={<PlacesFormPage/>}/>
        <Route path='/account/places/:id' element={<PlacesFormPage/>}/>
        <Route path='/place/:id' element={<PlacePage/>}/>
        <Route path='/account/bookings' element={<BookingsPage/>} />
        <Route path='/account/bookings/:id' element={<BookingPage/>} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App

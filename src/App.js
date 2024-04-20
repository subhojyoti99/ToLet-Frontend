import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { NavbarComponent } from './components/Navbar/Navbar';
import { Register } from './components/Auth/Register';
import { Login } from './components/Auth/Login';
import { HomeContainer } from './components/HomePage/HomeContainer';
import Footer from './components/Footer/Footer';
import { MainContainer } from './components/HomePage/MainContainer';
import React from "react";
import AddNewRoom from './components/Admin/AddNewRoom';
import { Rooms } from './components/Room/Rooms';
import { RoomDetails } from './components/Room/RoomDetails';
import { MyAccount } from './components/Account_Setting/MyAccount';
import CloudKitchen from './components/CloudKitchen/CloudKitchen';
import RoomMate from './components/RoomMate/RoomMate';
import TiffinSystem from './components/TiffinSystem/TiffinSystem';
import RoomWithFood from './components/RoomWithFood.jsx/RoomWithFood';
import GlassmorphismCards from './components/Our_Services/GlassmorphismCard';
import { NotFound } from './components/Junk/NotFound';

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-screen flex flex-col">
        <NavbarComponent />

        <main className="mt-4 md:mt-6 px-6 md:px-10 py-5 md:py-8 w-full bg-gradient-to-b from-white to-red-200 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
          <BrowserRouter>
            <Routes>
              {/*
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
              <Route path="/menuContainer" element={<MenuContainer />} />
              <Route path="/contactMe" element={<ContactMe />} />
            */}
              <Route path="/" exact element={<MainContainer />} />
              <Route path='/auth/register' element={<Register />} />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/my-account' element={<MyAccount />} />
              {/* <Route path="/room-register" element={<AddRoom />} /> */}
              <Route path="/room-register" element={<AddNewRoom />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path='/room/:id' element={<RoomDetails />} />
              <Route path='/cloud-kitchen' element={<CloudKitchen />} />
              <Route path='/room-mate' element={<RoomMate />} />
              <Route path='/tiffin-system' element={<TiffinSystem />} />
              <Route path='/room-with-food' element={<RoomWithFood />} />
              <Route path='/our-services' element={<GlassmorphismCards />} />
              <Route path='/*' element={<NotFound />} />

              {/* <Route path='/' element={<HomeContainer />} /> */}

            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;

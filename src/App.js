import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { AddRoom } from './components/AddRoom';
import { ViewRooms } from './components/ViewRooms';

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
              <Route path='/auth/register' element={<Register />} />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/room/register' element={<AddRoom />} />
              <Route path='/' element={<ViewRooms />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

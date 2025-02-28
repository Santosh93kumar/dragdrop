import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx';
import ColorPalette from './components/ColorPalette.jsx'
import Features from './components/Features.jsx'
import TestimonialCard from './components/TestimonialCard.jsx'
import Homepage from './pages/Homepage.jsx';
import WorkSpace from "./pages/WorkSpace.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Homepage/>} />
      <Route path='/color-palette' element={<ColorPalette/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/about' element={<TestimonialCard/>}/>
      <Route path='/workspace' element={<WorkSpace/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/AboutUs';
import NewsEvents from './pages/NewsEvents';
import Blogs from './pages/Blogs';
import ConsultationandCustomdesign from './pages/ConsultationandCustomdesign';
import Onsiteinstallation from './pages/Onsiteinstallation';
import PremiumEquipment from './pages/PremiumEquipment';
import Support from './pages/Support';
import Contactus from './pages/Contactus';
import ShopNow from './pages/ShopNow';
import Productlisting from './pages/Productlisting';
import EnvironmentConservation from './pages/EnvironmentConservation';
import InnovationTechnology from './pages/InnovationTechnology';
import QualityManagement from './pages/QualityManagement';
import Event from './pages/Event';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "aboutus",
    element: <AboutUs/>,
  },
  {
    path: "QualityManagement",
    element: <QualityManagement/>,
  },
  {
    path: "Event",
    element: <Event/>,
  },
  {
    path: "InnovationTechnology",
    element: <InnovationTechnology/>,
  },
  {
    path: "newsevents",
    element: <NewsEvents/>,
  },
  {
    path: "blogs",
    element: <Blogs/>,
  },
  {
    path: "ConsultationandCustomdesign",
    element: <ConsultationandCustomdesign/>,
  },
  {
    path: "Onsiteinstallation",
    element: <Onsiteinstallation/>,
  },
  {
    path: "PremiumEquipment",
    element: <PremiumEquipment/>,
  },
  {
    path: "Support",
    element: <Support/>,
  },
  {
    path: "Contactus",
    element: <Contactus/>,
  },
  {
    path: "ShopNow",
    element: <ShopNow/>,
  },
  {
    path: "Productlisting",
    element: <Productlisting/>,
  },
  {
    path: "EnvironmentConservation",
    element: <EnvironmentConservation/>,
  },
  
  {
    path: "/",
    element: <App/>,
  },
  // {
  //   path: "productdetail",
  //   element: <Productdetail/>,
  // },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

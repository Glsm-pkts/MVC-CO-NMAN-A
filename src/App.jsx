import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './view/LoginPage';
import HeaderView from './view/HeaderView';
import MainPageController from './controller/MainPageController';
import DetailPageController from './controller/DetailPageController';
import axios from 'axios';

// Doğrudan CoinCap API'sini HTTPS ile kullanıyoruz
axios.defaults.baseURL = "https://api.coincap.io/v2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MainPageController />} />
          <Route path="/coin/:id" element={<DetailPageController />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

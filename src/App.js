import HomeTemplate from 'templates/HomeTemplate';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';

import { history } from 'utils/history';
import Index from 'pages/Index';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Carts from 'pages/Carts';
import Profile from 'pages/Profile';


function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />} >
          <Route index element={<Index />} />
          <Route path='index' element={<Index />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='carts' element={<Carts />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </HistoryRouter >
  );
}

export default App;

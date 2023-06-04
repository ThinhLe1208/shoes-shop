import HomeTemplate from 'templates/HomeTemplate';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { history } from 'utils/history';
import Index from 'pages/Index';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Cart from 'pages/Cart';
import Profile from 'pages/Profile';
import Checkout from 'pages/Checkout';
import Search from 'pages/Search';
import ScrollToTopAuto from 'components/ScrollToTopAuto';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <HistoryRouter history={history}>
        <ScrollToTopAuto />
        <Routes>
          <Route path='' element={<HomeTemplate />} >
            <Route index element={<Index />} />
            <Route path='index' element={<Index />} />
            <Route path='detail/:id' element={<Detail />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='profile' element={<Profile />} />
            <Route path='search' element={<Search />} />
          </Route>
        </Routes>
      </HistoryRouter >
    </>
  );
}

export default App;

import { Suspense, lazy, useEffect } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BgColorsOutlined } from '@ant-design/icons';
import { ConfigProvider, FloatButton } from 'antd';

import HomeTemplate from 'templates/HomeTemplate';
// import Index from 'pages/Index';
// import Detail from 'pages/Detail';
// import Login from 'pages/Login';
import Register from 'pages/Register';
import Cart from 'pages/Cart';
import Profile from 'pages/Profile';
import Checkout from 'pages/Checkout';
// import Search from 'pages/Search';
import ScrollToTopAuto from 'components/ScrollToTopAuto';
import { history } from 'utils/history';
import { themeConfig } from 'utils/themes/antdTheme.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/slices/uiSlice';
import LoadingScreen from 'components/LoadingScreen';

const Index = lazy(() => import('pages/Index'));
const Detail = lazy(() => import('pages/Detail'));
const Login = lazy(() => import('pages/Login'));
const Search = lazy(() => import('pages/Search'));

function App() {
  const theme = useSelector(state => state.ui.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = (theme) => {
    dispatch(setTheme(theme));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    // a theme config of the antd library 
    < ConfigProvider theme={themeConfig[theme]} >
      <ToastContainer
        className="toast-position"
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
      <FloatButton.BackTop type="primary" />
      <FloatButton.Group
        trigger="click"
        shape="circle"
        type="primary"
        icon={<BgColorsOutlined />}
        style={{
          right: 24,
          bottom: 100,
        }}
      >
        <FloatButton icon={<BgColorsOutlined style={{ color: 'red' }} />} onClick={() => handleChangeTheme('red')} />
        <FloatButton icon={<BgColorsOutlined style={{ color: 'grey' }} />} onClick={() => handleChangeTheme('dark')} />
        <FloatButton icon={<BgColorsOutlined style={{ color: 'green' }} />} onClick={() => handleChangeTheme('green')} />
        <FloatButton icon={<BgColorsOutlined style={{ color: 'blue' }} />} onClick={() => handleChangeTheme('blue')} />
      </FloatButton.Group>

      <HistoryRouter history={history}>
        {/* auto scroll to top when changing page */}
        <ScrollToTopAuto />
        <Suspense fallback={<LoadingScreen />}>
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
              <Route path='*' element={<Navigate to='index' />} />
            </Route>
          </Routes>
        </Suspense>
      </HistoryRouter >
    </ ConfigProvider>
  );
}

export default App;

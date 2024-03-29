import { BgColorsOutlined } from '@ant-design/icons';
import { useGLTF } from '@react-three/drei';
import { ConfigProvider, FloatButton } from 'antd';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingScreen from 'components/LoadingScreen';
import ScrollToTopAuto from 'components/ScrollToTopAuto';
import { setTheme } from 'redux/slices/uiSlice';
import HomeTemplate from 'templates/HomeTemplate';
import { BLUE_COLOR_THEME, GREEN_COLOR_THEME, GREY_COLOR_THEME, RED_COLOR_THEME } from 'utils/constants/settingSystem';
import { history } from 'utils/history';
import { themeConfig } from 'utils/themes/antdTheme.js';

// dynamic imports with lazy React
const Index = lazy(() => import('pages/Index'));
const Detail = lazy(() => import('pages/Detail'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Cart = lazy(() => import('pages/Cart'));
const Profile = lazy(() => import('pages/Profile'));
const Search = lazy(() => import('pages/Search'));

const themeList = [
  { id: 0, color: BLUE_COLOR_THEME },
  { id: 1, color: RED_COLOR_THEME },
  { id: 2, color: GREEN_COLOR_THEME },
  { id: 3, color: GREY_COLOR_THEME },
];

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
      {/* notifications from toastify library */}
      <ToastContainer
        className="toast-position"
        position="top-left"
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
      {/* a back to top button */}
      <FloatButton.BackTop type="primary" />
      {/* change theme buttons */}
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
        {themeList?.map(theme => <FloatButton key={theme.id} icon={<BgColorsOutlined style={{ color: theme.color }} />} onClick={() => handleChangeTheme(theme.color)} />)}
      </FloatButton.Group>

      <HistoryRouter history={history}>
        {/* auto scroll to top when changing page */}
        <ScrollToTopAuto />
        {/* React.lazy */}
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='' element={<HomeTemplate />} >
              <Route index element={<Index />} />
              <Route path='index' element={<Index />} />
              <Route path='detail/:id' element={<Detail />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='cart' element={<Cart />} />
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

useGLTF.preload(require('assets/models/nike_air_zoom_pegasus_36-transformed.glb'));

export default App;

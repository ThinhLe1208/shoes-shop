import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

import { store } from 'redux/configStore';
import App from 'App';
import GlobalStyles from 'components/GlobalStyles';
import themeConfig from 'utils/themes/antdTheme.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyles>
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
    </GlobalStyles>
  </Provider >
  // </React.StrictMode>
);

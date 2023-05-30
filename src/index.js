import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';

import { persistor, store } from 'redux/configStore';
import App from 'App';
import GlobalStyles from 'components/GlobalStyles';
import themeConfig from 'utils/themes/antdTheme.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* delay the rendering of an app’s UI until the persisted data is available in the Redux store */}
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles>
        {/* a theme config of the antd library */}
        <ConfigProvider theme={themeConfig}>
          <App />
        </ConfigProvider>
      </GlobalStyles>
    </PersistGate>
  </Provider >
  // </React.StrictMode>
);

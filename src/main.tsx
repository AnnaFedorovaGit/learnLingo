import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.ts';
// import { store, persistor } from './redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './main.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/learnLingo">
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
)
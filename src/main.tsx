import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.ts';
// import { store, persistor } from './redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/learnLingo">
          <App />
          <ToastContainer
            autoClose={3000}
            closeOnClick={true}
            transition={Zoom}
          />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
)
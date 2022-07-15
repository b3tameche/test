import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App';

import configureStore from './configureStore';
let { store, persistor } = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store} >
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
);

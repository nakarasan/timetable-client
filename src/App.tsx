import React from 'react';
import { Router } from 'router';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import store from 'store/store';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.Fragment>
  );
}

export default App;

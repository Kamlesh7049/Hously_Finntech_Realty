
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./assets/styles/custom.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './Redux/store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

)

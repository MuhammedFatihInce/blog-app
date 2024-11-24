import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from './redux/store.js';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <App />
  </Provider>,
);
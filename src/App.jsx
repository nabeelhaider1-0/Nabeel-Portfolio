// App.js

import Landing from "./Components/Landing/Landing";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Landing />
      <ToastContainer />
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage.tsx";
import RegistrationForm from "./Pages/RegistrationForm/RegistrationForm.tsx";
import RegisteredList from "./Pages/RegisteredList/RegisteredList.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/registration/list" element={<RegisteredList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

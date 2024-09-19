import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import apiFetch from "./apiFetch";

const response = await apiFetch("GET", "/api-key/info");
if(response.status!==200) {
  alert("Refresh your API Key!")
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

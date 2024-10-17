import { useState } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignInPage from "./pages/auth/SignInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import PlantShowPage from "pages/PlantShowPage";
import * as userServices from "services/users"
import SessionContext from "contexts/SessionContext";
import PlantListPage from "pages/PlantListPage";
import ScrollToTop from "shared-components/ScrollToTop";


function App() {
  const [token, setToken] = useState(() => 
    userServices.getSessionTokenStorage()
  );

  return (

    <SessionContext.Provider value = {{
      signIn: (capstoneSessionToken) => {
        setToken(capstoneSessionToken);
        userServices.setSessionTokenStorage(capstoneSessionToken);
      },
      signOut: () => {
        setToken(null);
        userServices.removeSessionTokenStorage();
      },
      sessionUsername: token ? jwtDecode(token).username : null,
    }}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="plants" element={<PlantListPage/>} />
        <Route path="plants/:plantId" element={<PlantShowPage/>} />
      </Routes>
    </BrowserRouter>
    </SessionContext.Provider>

  );
}

export default App;

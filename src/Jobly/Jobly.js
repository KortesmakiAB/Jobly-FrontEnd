import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

import NavBar from "../shared/Navbar";
import Routes from "../shared/Routes";
import CurrUserContext from '../auth/CurrUserContext';
import useLocalStorage from '../shared/useLocalStorage';
import JoblyApi from '../shared/api';

const TOKEN_STORAGE_KEY = "jobly-token";


function Jobly() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

  useEffect(() => {
    setInfoLoaded(false);
    (async () => {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class, which requires a token to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getUser(username);
          setCurrUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrUser(null);
        }
      }
      setInfoLoaded(true);
    })();
    
  }, [token]);
  
  if (!infoLoaded) return 'loading...';

  return (
    <div className="Jobly">
      <CurrUserContext.Provider value={{ currUser, setCurrUser } }>
        <NavBar />
        <Routes />
      </CurrUserContext.Provider>
    </div>
  );
}

export default Jobly;
export { TOKEN_STORAGE_KEY };

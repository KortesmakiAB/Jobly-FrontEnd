import { useState } from "react";
import NavBar from "../shared/Navbar";
import Routes from "../shared/Routes";
import CurrUserContext from '../auth/CurrUserContext';

function Jobly() {
  const [currUser, setCurrUser] = useState(null);
  console.log('Jobly-currUser', currUser)

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

import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CurrUserContext from '../auth/CurrUserContext';
import Companies from "../companies/Companies";
import Company from '../companies/Company';
import Jobs from '../jobs/Jobs';
import Profile from '../profile/UserProfile';
import Home from '../home/Home';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';

const protectedRoutes = () => {
    return (
        <>
        <Route exact path="/companies">
            <Companies />                
        </Route>
        <Route exact path="/companies/:company">
            <Company />              
        </Route>
        <Route exact path="/jobs">
            <Jobs />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        </>
    );
};


function Routes() {
    const { currUser } = useContext(CurrUserContext);

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    { currUser && protectedRoutes() }

                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    
                    <Redirect to="/" />
                 </Switch>
            </div>
        </div>
    );
}

export default Routes;
  
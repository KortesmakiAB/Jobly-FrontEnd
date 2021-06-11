import { Route, Switch } from 'react-router-dom';
import Companies from "../companies/Companies";
import Company from '../companies/Company';
import Jobs from '../jobs/Jobs';
import Profile from '../profile/UserProfile';
import Home from '../home/Home';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';


function Routes() {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
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
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                 </Switch>
            </div>
        </div>
    );
}

export default Routes;
  
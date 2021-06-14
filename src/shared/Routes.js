import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from "../companies/Companies";
import Company from '../companies/Company';
import Jobs from '../jobs/Jobs';
import Profile from '../profile/UserProfile';
import Home from '../home/Home';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import ProtectedRoute from './ProtectedRoute';


function Routes() {

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    <ProtectedRoute exact path="/companies">
                        <Companies />                
                    </ProtectedRoute>

                    <ProtectedRoute exact path="/companies/:company">
                        <Company />              
                    </ProtectedRoute>

                    <ProtectedRoute exact path="/jobs">
                        <Jobs />
                    </ProtectedRoute>

                    <ProtectedRoute exact path="/profile">
                        <Profile />
                    </ProtectedRoute>

                    <Redirect to="/" />
                 </Switch>
            </div>
        </div>
    );
}

export default Routes;
  
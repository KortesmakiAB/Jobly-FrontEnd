import { Route, Switch } from 'react-router-dom';
import Companies from "./RoutesComps";
import Company from './RoutesComp';
import Jobs from './RoutesJobs';
import Profile from './UserProfile';
import Home from './RoutesHome';
import Login from './RoutesLogin';
import SignUp from './RoutesSignUp';

// import './Routes.css';



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
  
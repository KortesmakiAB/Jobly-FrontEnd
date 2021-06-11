import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import CurrUserContext from '../auth/CurrUserContext';
import './Home.css';

function Home() {
  const { currUser } = useContext(CurrUserContext);
  
  return (
    <div className="Home">
      <h1 className="mn-4 font-weight-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      { currUser
        ? (
          <h3>
            Welcome Back, { currUser.firstName }
          </h3>
        )
        : (
          <p>
            <Link to="/login"><Button color="primary">Login</Button></Link>
            <Link to="/signup"><Button color="primary">Sign up</Button></Link>
          </p>          
        )
      }      
    </div>
  );
}

export default Home;
  
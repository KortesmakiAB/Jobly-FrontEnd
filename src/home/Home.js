import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import CurrUserContext from '../auth/CurrUserContext';
import './Home.css';

function Home() {
  const { currUser } = useContext(CurrUserContext);

  const authorized = () => {
		return (
      <h3>
        Welcome Back, { currUser.firstName }
      </h3>
    );
	};

	const unAuthorized = () => {
		return (
      <p>
        <Link to="/login"><Button color="primary">Login</Button></Link>
        <Link to="/signup"><Button color="primary">Sign up</Button></Link>
      </p>          
    );
	};
  
  return (
    <div className="Home">
      <h1 className="mn-4 font-weight-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      { currUser ? authorized() : unAuthorized() }
    </div>
  );
}

export default Home;
  
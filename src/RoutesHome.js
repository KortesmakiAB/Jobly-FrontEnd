import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './RoutesHome.css';

function Home() {
  
  const notAuth = (
    <p>
      <Link to="/login"><Button color="primary">Login</Button></Link>
      <Link to="/signup"><Button color="primary">Sign up</Button></Link>
    </p>
  );

  const auth = (
    <h3>
      Welcome Back, {`TODO!`}
    </h3>
  );

  
  return (
    <div className="Home">
      <h1 className="mn-4 font-weight-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      { notAuth }
      { auth }
    </div>
  );
}

export default Home;
  
import { useState, useEffect } from "react";
import JoblyApi from './api';
import JobCard from './JobCard';
import Search from "./Search";

// import './Jobs.css';


function Jobs() {
  const [jobs, setJobs] = useState([]);

	useEffect(() => {
		
		(async () => {
			let jobs = await JoblyApi.getOrSearchAllJobs();
			setJobs(() => jobs);
		})();
	
	}, []);

	const handleJobSearch = (searchTerms) => {
    (async () => {
      if (!searchTerms) searchTerms = null;

			let jobs = await JoblyApi.getOrSearchAllJobs({ title: searchTerms });
			setJobs(() => jobs);
		})();
	
	};

  return (
    <div className="Jobs row">
      <div className="col-md-8 offset-md-2">
        <Search handleSearch={handleJobSearch} />
        <div>
          { jobs.map(job => 
            <JobCard 
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
              name={job.companyName}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
  
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JobCard from './JobCard';
import JoblyApi from './api';
import './RoutesComp.css';

import logo1 from './logos/logo1.png';
import logo2 from './logos/logo2.png';
import logo3 from './logos/logo3.png';
import logo4 from './logos/logo4.png';


function Company() {
    const { company: handle } = useParams();
	const [company, setCompany] = useState({});

    const logos = {
		'/logos/logo1.png': logo1,
		'/logos/logo2.png': logo2,
		'/logos/logo3.png': logo3,
		'/logos/logo4.png': logo4,		
	}

	useEffect(() => {
		
		(async () => {
			let comp = await JoblyApi.getCompany(handle);
			setCompany(() => comp);
		})();
	
	}, [handle]); 

	
    return (
		<div className="row Companies">
			<div className="col-md-8 offset-md-2">
				<h4>
                    {company.name}
                    <img src={logos[company.logoUrl]} alt={`${company.name} logo`} className="Logo"></img>
                </h4>
                <p>{company.description}</p>
                <div className="">
					{ company.jobs && company.jobs.map(job => 
                        <JobCard 
                            key={job.id}
                            name={company.name}
							title={job.title} 
							salary={job.salary} 
							equity={job.equity} 
							logoUrl={company.logoUrl}
						/>
					)}
				</div>
			</div>
		</div>
    );
}
  
export default Company;
  
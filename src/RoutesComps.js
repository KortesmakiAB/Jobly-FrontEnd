import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from './api';
import Company from './RoutesComp';
import './RoutesComps.css';
import Search from './Search';

function Companies() {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		
		(async () => {
			let comps = await JoblyApi.getOrSearchAllCompanies();
			setCompanies(() => comps);
		})();
	
	}, []);

	const handleCoSearch = (searchTerms) => {
		(async () => {
			if (!searchTerms) searchTerms = null;
			
			let comps = await JoblyApi.getOrSearchAllCompanies({ name: searchTerms });
			setCompanies(() => comps);
		})();
	};
	
    return (
		<div className="d-block row Companies">
			<div className="col-md-8 offset-md-2">
				<Search handleCoSearch={handleCoSearch} />
				<div className="">
					{ companies.map(co => 
						<Link key={co.handle} to={`/companies/${co.handle}`} className="text-decoration-none">
							<Company  
								name={co.name} 
								handle={co.handle} 
								description={co.description} 
								logoUrl={co.logoUrl}
								/>
						</Link>) 
					}
				</div>
			</div>
		</div>
    );
}
  
export default Companies;
  
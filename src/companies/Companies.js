import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from '../shared/api';
import CompanyCard from './CompanyCard';
import './Companies.css';
import Search from '../shared/Search';

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
		<div className="Companies">
			<Search handleSearch={handleCoSearch} />
			<div className="">
				{ companies.map(co => 
					<Link key={co.handle} to={`/companies/${co.handle}`} className="text-decoration-none">
						<CompanyCard  
							name={co.name} 
							handle={co.handle} 
							description={co.description} 
							logoUrl={co.logoUrl}
							/>
					</Link>) 
				}
			</div>
		</div>
    );
}
  
export default Companies;
  
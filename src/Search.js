
import { useState } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

// import './Routes.css';


function Search({ handleCoSearch }) {
    const [search, setSearch] = useState('');

    const handleChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        handleCoSearch(search);

    }

    return (
        <Form inline className="d-flex mb-4" onSubmit={handleSubmit}>
            <Label for="search" className="d-none">Search</Label>
            <Input 
            id="search" 
            type="text"
            className="" 
            placeholder=" enter search term..." 
            bsSize="lg"
            value={search} 
            onChange={handleChange}
            ></Input>
            <Button color="primary" className="" >Submit</Button>
        </Form>
    );
}

export default Search;
  
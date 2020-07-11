import React from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue br4'
                type='search' 
                placeholder='Search and find robots'
                onChange={searchChange} //call this func. when value is entered in the search box
                />
        </div>
    );
}

export default SearchBox;
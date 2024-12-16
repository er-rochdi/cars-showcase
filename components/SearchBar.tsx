"use client";
import SearchMenuFacturer from './SearchMenuFacturer';
import { useState } from 'react';

const SearchBar = () => {
    const [manufacturer,setManufacturer] = useState('')
    const handleSearch = () => {

    }
  return (
    <div>
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
             <SearchMenuFacturer
             manufacturer={manufacturer}
             setManufacturer={setManufacturer}

              />
            </div>

        </form>
    </div>
  )
}

export default SearchBar
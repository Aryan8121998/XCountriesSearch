import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
<input
      type="text"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={handleSearch}
      style={{
        width:"500px",
        padding:"10px",
        margin:"10px"
      }}
    />
    </div>
    
  );
};

export default SearchBar;

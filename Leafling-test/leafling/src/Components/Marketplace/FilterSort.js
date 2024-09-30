import React from 'react';
import './FilterSort.css';

const FilterSort = ({ setSort, setFilter }) => {
  return (
    <div className="filter-sort">
      <div className="sort">
        <label>Sort By:</label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="filter">
        <label>Filter By Price:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="under-100">Under $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;

import React, { useState } from 'react';
import Button from './Button';
// import items from './Data';

function FilterForm(props) {
  // Create state variables to store the input values
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  // const [filteredItems, setFilteredItems] = useState(items);

  //   filter Item per min max price
  // function filterItemsByPrice(items, minPrice, maxPrice) {
  //   return items.filter((item) => {
  //     const itemPrice = item.price;
  //     return itemPrice >= minPrice && itemPrice <= maxPrice;
  //   });
  // }
  
  // Event handler for updating the state when the input values change
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Event handler for logging the input values to the console
  const filterButtonClick = () => {
    console.log('Minimum Price:', minPrice);
    console.log('Maximum Price:', maxPrice);

    const parsedMinPrice = parseFloat(minPrice);
    const parsedMaxPrice = parseFloat(maxPrice);

    props.filterItems(parsedMinPrice, parsedMaxPrice);
    // const filtered = filterItemsByPrice(items, parsedMinPrice, parsedMaxPrice);
    // setFilteredItems(filtered);

  };

  return (
    <div>
      <h3>Filter</h3>
      <div className="inputss">
        <p>
          Price min :{' '}
          <input
            className="input1"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </p>
        <p>
          Price max :{' '}
          <input
            className="input2"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </p>
      </div>
      <div className="button">
        <Button name="Filter" click={filterButtonClick} />
      </div>
    </div>
  );

}

export default FilterForm;

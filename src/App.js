import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';
import FilterForm from './components/FilterForm';
import items from './components/Data';
import { initializeGoogleAnalytics } from './google';

function App() {

  useEffect(() => {
    // Initialize Google Analytics
    initializeGoogleAnalytics();
  }, []);

  const [filteredItems, setFilteredItems] = useState(items);
  
  const filterItemsByPrice = (minPrice, maxPrice) => {
    const parsedMinPrice = parseFloat(minPrice);
    const parsedMaxPrice = parseFloat(maxPrice);

    if (isNaN(parsedMinPrice) || isNaN(parsedMaxPrice)) {
      // Handle invalid input if needed
      return;
    }

    // Filter the items based on the price range
    const filtered = items.filter((item) => {
      const itemPrice = parseFloat(item.prix);
      return itemPrice >= parsedMinPrice && itemPrice <= parsedMaxPrice;
    });

    setFilteredItems(filtered);
  };

  return (
    <>
      <div className="header">
        <Header button="Search"></Header>
      </div>

      <div className='container'>

        <div className="content">
          <h3>All Products</h3>
          <div className='allItems'>
            {filteredItems.map((item, index) => (
              <div key={index} className={`item${index + 1}`}>
                    <Item
                      imgBe={item.imgBe}
                      imgKely1={item.imgKely1}
                      imgKely2={item.imgKely2}
                      imgKely3={item.imgKely3}
                      prix={item.prix}
                      stock={item.stock}
                      button="Add to card"
                    />
              </div>
            ))}
          </div>
        </div>

        <div className='filter'>
          <FilterForm filterItems={filterItemsByPrice}></FilterForm>
          <ul>
            {/* {filteredItems.map((item) => (
              <li key={item.id}>{item.name} - Price: {item.price}</li>
            ))} */}
          </ul>
        </div>

      </div>

      <div className='footer'>
        <Footer title='Social Media' link1='Contact Us' link2='Facebook' link3='About Us' link4='Instagram'></Footer>
      </div>
    </>
  );
}

export default App;

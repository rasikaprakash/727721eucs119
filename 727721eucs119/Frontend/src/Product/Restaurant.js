// 

import React, { useState } from 'react';
import './restaurant.css';

const products = [
  {
    id: 1,
    companyName: 'Apple',
    productName: 'iPhone 14 Pro Max',
    price: '$999',
    availability: 'In stock',
    discount: '10%',
    category: 'Phone',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-250x250.png'
  },
  {
    id: 2,
    companyName: 'Samsung',
    productName: 'Galaxy S21',
    price: '$799',
    availability: 'In stock',
    discount: '15%',
    category: 'Phone',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-250x250.png'
  },
  {
    id: 3,
    companyName: 'Apple',
    productName: 'iPad Pro',
    price: '$1099',
    availability: 'In stock',
    discount: '5%',
    category: 'Tablet',
    imageUrl: 'https://images-cdn.ubuy.co.in/633ac2c34e494c0ca5733748-android-tablet-10-inch-pritom-m10-2-gb.jpg'
  },
  {
    id: 4,
    companyName: 'Dell',
    productName: 'XPS 13',
    price: '$1299',
    availability: 'In stock',
    discount: '20%',
    category: 'Laptop',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrpFS0ZZ3nSLi3jNcAZALUVkbmiIbdFtwBQ&s'
  }
  // Add more products as needed
];

const Restaurant = () => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredProducts = products.filter(product =>
    product.companyName.toLowerCase().includes(filter.toLowerCase()) &&
    (categoryFilter === '' || product.category === categoryFilter)
  );

  return (
    <div>
      <header>
        <div id="header-nav"> 
          <center><i style={{color:"white",fontSize:"50px"}}>Get Products</i></center>
        </div>
      </header>
      <br /><br />
      <div style={{ textAlign: 'center' }}>
        <input 
          type="text" 
          placeholder="Filter by company name" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
          style={{ padding: '10px', fontSize: '16px' ,right:"5%",position:"absolute"}}
        />
        <div style={{ marginTop: '20px' }}>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' ,right:"25%" , position:"absolute"}}
          >
            <option value="">All</option>
            <option value="Phone">Phone</option>
            <option value="Tablet">Tablet</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
      </div>
      <br />
      <br /><br />
      <div id="whole-card">
        <br /><br />
        {filteredProducts.map((product, index) => (
          <div id="card" style={{marginLeft:"20px"}} key={index}>
            <div>
              <img 
                src={product.imageUrl} 
                width="300px" 
                height="200px" 
                style={{borderRadius:"25px"}} 
                alt={`${product.productName}`} 
              />
            </div>
            <br />
            <div><b>Company name</b>: {product.companyName}</div>
            <div><b>Product name</b>: {product.productName}</div>
            <div><b>Price</b>: {product.price}</div>
            <div><b>Availability</b>: {product.availability}</div>
            <div><b>Discount</b>: {product.discount}</div>
            <button style={{width:"60px",height:"30px",borderRadius:"10px",backgroundColor:"black",color:"white"}}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

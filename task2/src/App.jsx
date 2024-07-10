
import React, { useState, useEffect } from 'react';

function App() {


  const [data1, setData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
  // Function to fetch data
  const fetchData = async () => {
      // Make a GET request using the Fetch API
      const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice-1 0000',{
        mode:'no-cors'
      });
      setData(response.data);
      console.log(data1);
      
  }},)

  // Render the component
  return (
    <div>
      <h1>fetching data{data1}</h1>
    </div>
  );
}

export default App;


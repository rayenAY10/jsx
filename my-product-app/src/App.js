
// src/App.js
import React from 'react';
import { productData } from './product';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const firstName = "YourFirstName"; // Replace with your first name or use a variable if available.

  return (
    <div className="App">
      <div className="card">
        <Image image={productData.image} />
        <div className="card-body">
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </div>
      </div>

      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
}

export default App;

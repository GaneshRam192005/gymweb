import React, { useEffect, useState } from 'react';
import './shop.css';
import { Link } from "react-router-dom";

const Vitamins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    type: '',
    desc: '',
    reviews: '',
    stock: 0,
    price: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [gymId, setGymId] = useState('');
  const [adminId, setAdminId] = useState('');
  const url = "https://gym-management-2.onrender.com/products/";

  useEffect(() => {
    if (gymId && adminId) {
      fetchData();
    }
  }, [gymId, adminId]);
  

  const fetchData = async () => {
    try {
     
      let query = '';
      if (gymId && adminId) {
        query = `?gym_id=${gymId}&admin=${adminId}`;
      }
  
      const response = await fetch(`${url}${query}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        if (result.length > 0) {
          // Assuming that all products belong to the same gym/admin, take the first product's gym_id and admin_id
          setGymId(result[0].gym_id);
          setAdminId(result[0].admin);
        }
        setLoading(false);
      } else {
        setError('Failed to fetch data');
        setLoading(false);
      }
    } catch (error) {
      setError('Error occurred while fetching data');
      setLoading(false);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('type', newProduct.type);
    formData.append('desc', newProduct.desc);
    formData.append('reviews', newProduct.reviews);
    formData.append('stock', newProduct.stock);
    formData.append('price', newProduct.price);
    formData.append('gym_id', gymId); 
    formData.append('admin', adminId); 
    
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Log the full error text
        console.error('API Error:', errorText);
        throw new Error(`Failed to add product: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      alert("Product added successfully");
      console.log('Product added successfully:', result);
  
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to add product: ${error.message}`);
    }
  };
  

  return (
    <div>
      <body className="pb-48">
        <header className="bg-[#018ABD] z-100 py-5 fixed right-0 left-0">
          <nav className="flex md:justify-between justify-around gap-14 align-middle items-center w-4/5 mx-auto">
            <div className="hidden md:block bg-white py-[3px] px-6 sm:px-10 font-semibold sm:py-1 rounded-md text-base sm:text-xl text-[#1C96C3] ">
              <Link to="/home">HOME</Link>
            </div>

            <div className="virtual sm:hidden text-white">
              <svg id="menu-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>

            <div className="md:w-full lg:w-[70%]">
              <div className="search-container">
                <img className="search_icon h-[20px] md:w-[1.25rem] md:h-[1.25rem] md:left-[0.5rem]" src="images/Vector (4).png" alt="Search Icon"/>
                <input className="search h-[30px] md:w-[100%] md:h-[2rem] md:pl-[2rem]" type="text" placeholder="Search"/>
              </div>
            </div>
          </nav>
        </header>

        {/* Product Input Form */}
        <section className="w-4/5 mx-auto mt-[100px]">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8" encType="multipart/form-data">
            <input 
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="border p-2 rounded-md"
              required
            />
            <input 
              type="text"
              name="type"
              value={newProduct.type}
              onChange={handleInputChange}
              placeholder="Product Type"
              className="border p-2 rounded-md"
              required
            />
            <textarea 
              name="desc"
              value={newProduct.desc}
              onChange={handleInputChange}
              placeholder="Product Description"
              className="border p-2 rounded-md"
              required
            />
            <input 
              type="text"
              name="reviews"
              value={newProduct.reviews}
              onChange={handleInputChange}
              placeholder="Product Reviews"
              className="border p-2 rounded-md"
              required
            />
            <input 
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              placeholder="Stock"
              className="border p-2 rounded-md"
              required
            />
            <input 
              type="number"
              step="0.01"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="border p-2 rounded-md"
              required
            />
            <input 
              type="file"
              name="image"
              onChange={handleImageChange}
              className="border p-2 rounded-md"
              required
            />
            <button type="submit" className="bg-[#1C96C3] text-white rounded-md py-2 px-4">Add Product</button>
          </form>
        </section>

        <nav className="w-4/5 mx-auto">
          <section className="justify-around hidden md:flex">
            <div className="text text-2xl cursor-pointer font-semibold"> <Link to="/shop">WHEY PROTEIN</Link></div>
            <div className="text text-2xl cursor-pointer font-semibold"> <Link to="/vitamin">VITAMINS</Link></div>
            <div className="text text-2xl cursor-pointer font-semibold"> <Link to="/gain"> GAINERS</Link></div>
            <div className="text text-2xl cursor-pointer font-semibold"> <Link to="/test1"> TEST BOOSTERS</Link></div>
            <div className="text text-2xl cursor-pointer font-semibold"> <Link to="/weight"> WEIGHT LOSS</Link></div>
          </section>
        </nav>

        {/* Display Products */}
        <section className="w-11/12 z-10 lg:p-12 flex justify-center align-middle items-center mx-auto mt-10">
          <section className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              data.map((product, index) => (
                <section key={index} className="px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px]" data-aos="fade-up">
                  <div className="max-w-[100%] object-cover mx-auto">
                    <img className="w-full" src={product.image} alt={product.name} />
                  </div>
                  <div className="content md:text-xl font-semibold text-sm">
                    <p>{product.name}</p>
                  </div>
                  <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹{product.price}</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                  </div>
                </section>
              ))
            )}
          </section>
        </section>

        <section className="mt-6 mx-auto flex justify-center items-center align-middle">
          <button className="text-xl w-[80%] lg:w-[40%] rounded-xl bg-[#1C96C3] px-5 text-white py-2">SHOW MORE PRODUCTS</button>
        </section>
      </body>
    </div>
  );
};

export default Vitamins;

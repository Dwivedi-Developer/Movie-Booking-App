import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ticket = () => {
const notify = () => toast("Your Ticket Booked Successfully!!");
  const Navigate = useNavigate();
  const {name} = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    
    numberOfTickets: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for showing how data is send by form
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="numberOfTickets" className="block text-sm font-medium text-gray-700">
            Number of Tickets
          </label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            min="1"
            required
          />
        </div>
        <div className="flex gap-14">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={notify}
        >
          Book Now
        </button>
        <ToastContainer position='top-center' />
        <button onClick={()=>{
            Navigate("/")
        }} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Home</button></div>
      </form>
    </div>
  );
};

export default Ticket;

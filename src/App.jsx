import React ,{ useEffect }from 'react'; // Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar_ff from '@/components/navbar_ff'; // Import Navbar_ff
import Register from '@/components/register'; // Import Register
import Login from '@/components/login'; // Import Login
import Business_form from '@/components/business_form'; // Import Business_form
import './App.css'; // Import App.css
import Cookies from 'js-cookie';

function App() {
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Assuming you have an endpoint to validate the token
      fetch('http://localhost/api/validateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      
      .then(response => response.json())
      .then(data => {
        if (data.isValid) {
          // Token is valid
          console.log('Token is valid' , token);
          // Proceed with automatic login or user session restoration
        } else {
          // Token is not valid
          console.log('Token is not valid');
          // Redirect to login or remove the invalid token
          Cookies.remove('token');
        }
      })
      .catch(error => {
        console.error('Error validating token:', error);
        // Handle error (e.g., network error)
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar_ff /> {/* Navbar_ff should be inside BrowserRouter */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/business" element={<Business_form />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

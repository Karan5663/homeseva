// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/navbar.css';
// import logo from '../Img/logo.jpg'

// const Navbar = () => {
//   return (
//     <div className="App-options">        
//       <img
//           src={logo} 
//           alt="Logo"
//           className="logo-image"
//           style={{padding:10,marginTop:-12, height: '45px', width: '60px',borderRadius: '80px' }}
//       />

//       <select>
//       <option value="" disabled selected> 
//       📍Location 
//         </option>
//                  <option value="Mumbai">📍 Mumbai</option>
//                  <option value="Pune">📍 Pune</option>
//                  <option value="Nagpur">📍 Nagpur</option>
//                  <option value="Nashik">📍 Nashik</option>
//                  <option value="Aurangabad">📍 Aurangabad</option>
//                  <option value="Solapur">📍 Solapur</option>
//                  <option value="Amravati">📍 Amravati</option>
//                  <option value="Kolhapur">📍 Kolhapur</option>
//                  <option value="Thane">📍 Thane</option>
//                  <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
//                  <option value="Sangli">📍 Sangli</option>
//                  <option value="Malegaon">📍 Malegaon</option>
//                  <option value="Jalgaon">📍 Jalgaon</option>
//                  <option value="Akola">📍 Akola</option>
//                  <option value="Latur">📍 Latur</option>
//                  <option value="Dhule">📍 Dhule</option>
//                  <option value="Ahmednagar">📍 Ahmednagar</option>
//                  <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
//                  <option value="Navi Mumbai">📍 Navi Mumbai</option>
//                  <option value="Ichalkaranji">📍 Ichalkaranji</option>
//       </select>
//       <input type="text" placeholder="🔍Search services" style={{ WebkitTextFillColor: 'black', color: 'black', width: '400px' }} />

//       <nav>
//         <ul>
//           <Link to="/Home">Home</Link>
//           <Link to="/aboutus">About us</Link>
//           <Link to="/Ourservices">Our service</Link>
//           <Link to="/Contact">Contact</Link>
//           <Link to="/Login">Login</Link>
//           <Link to="/ProductContainer">new</Link>
//           <Link to="/Tp">Tp</Link>

          
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

//************************************************************************** */

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../css/navbar.css';
// import logo from '../Img/logo.jpg';

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const services = [
//     'Plumbing',
//     'Home Cleaning',
//     'Electrical Repairs',
//     'Pest Control',
//     'Painting',
//     'Gardening',
//     'Carpentry',
//     'Appliance Repair'
//   ];

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (value.length > 0) {
//       const filteredSuggestions = services.filter(service =>
//         service.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//   };

//   return (
//     <div className="App-options">        
//       <img
//         src={logo}
//         alt="Logo"
//         className="logo-image"
//         style={{ padding: 10, marginTop: -12, height: '45px', width: '60px', borderRadius: '80px' }}
//       />

//       <select>
//         <option value="" disabled selected>📍 Location</option>
//         <option value="Mumbai">📍 Mumbai</option>
//         <option value="Pune">📍 Pune</option>
//         <option value="Nagpur">📍 Nagpur</option>
//         <option value="Nashik">📍 Nashik</option>
//         <option value="Aurangabad">📍 Aurangabad</option>
//         <option value="Solapur">📍 Solapur</option>
//         <option value="Amravati">📍 Amravati</option>
//         <option value="Kolhapur">📍 Kolhapur</option>
//         <option value="Thane">📍 Thane</option>
//         <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
//         <option value="Sangli">📍 Sangli</option>
//         <option value="Malegaon">📍 Malegaon</option>
//         <option value="Jalgaon">📍 Jalgaon</option>
//         <option value="Akola">📍 Akola</option>
//         <option value="Latur">📍 Latur</option>
//         <option value="Dhule">📍 Dhule</option>
//         <option value="Ahmednagar">📍 Ahmednagar</option>
//         <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
//         <option value="Navi Mumbai">📍 Navi Mumbai</option>
//         <option value="Ichalkaranji">📍 Ichalkaranji</option>
//       </select>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="🔍 Search services"
//           style={{ WebkitTextFillColor: 'black', color: 'black', width: '400px' }}
//           value={searchTerm}
//           onChange={handleChange}
//         />
//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((suggestion, index) => (
//               <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <nav>
//         <ul>
//           <Link to="/Home">Home</Link>
//           <Link to="/aboutus">About us</Link>
//           <Link to="/Ourservices">Our service</Link>
//           <Link to="/Contact">Contact</Link>
//           <Link to="/Login">Login</Link>
//           <Link to="/ProductContainer">new</Link>
//           <Link to="/Tp">Tp</Link>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../Img/logo.jpg';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const services = [
    'Plumbing',
    'Home Cleaning',
    'Electrician',
    'Pest Control',
    'Home Painting',
    'other service',
    'Home Appliances'
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = services.filter(service =>
        service.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    navigateToService(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (services.includes(searchTerm)) {
        navigateToService(searchTerm);
      }
    }
  };

  const navigateToService = (service) => {
    const servicePath = service.toLowerCase().replace(/\s+/g, '');
    navigate(`/${servicePath}`);
  };

  return (
    <div className="App-options">        
      <img
        src={logo}
        alt="Logo"
        className="logo-image"
        style={{ padding: 10, marginTop: -12, height: '45px', width: '60px', borderRadius: '80px' }}
      />

      <select>
        <option value="" disabled selected>📍 Location</option>
        <option value="Mumbai">📍 Mumbai</option>
        <option value="Pune">📍 Pune</option>
        <option value="Nagpur">📍 Nagpur</option>
        <option value="Nashik">📍 Nashik</option>
        <option value="Aurangabad">📍 Aurangabad</option>
        <option value="Solapur">📍 Solapur</option>
        <option value="Amravati">📍 Amravati</option>
        <option value="Kolhapur">📍 Kolhapur</option>
        <option value="Thane">📍 Thane</option>
        <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
        <option value="Sangli">📍 Sangli</option>
        <option value="Malegaon">📍 Malegaon</option>
        <option value="Jalgaon">📍 Jalgaon</option>
        <option value="Akola">📍 Akola</option>
        <option value="Latur">📍 Latur</option>
        <option value="Dhule">📍 Dhule</option>
        <option value="Ahmednagar">📍 Ahmednagar</option>
        <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
        <option value="Navi Mumbai">📍 Navi Mumbai</option>
        <option value="Ichalkaranji">📍 Ichalkaranji</option>
      </select>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search services"
          style={{ WebkitTextFillColor: 'black', color: 'black', width: '400px' }}
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav>
        <ul>
          <Link to="/Home">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/Ourservices">Our service</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
          <Link to="/ProductContainer">new</Link>
          <Link to="/Tp">Tp</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


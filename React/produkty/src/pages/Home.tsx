import React from 'react';
import "../styles/navbar.css";
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (

    <div>
      <Navbar />
      <div>
        <h1>Strona Główna</h1>
      </div>
    </div>
  );
};

export default Home;

// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import CardList from './Components/CardList';
import Breadcrumb from './Components/Breadcrumb';
import './App.css'; // Import global styles

function App() {
  // Define the breadcrumb path
  const path = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'AI & Machine Learning', link: '/services/ai-ml' }
  ];

  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />

      <main className="container">
        {/* Breadcrumb component */}
        <Breadcrumb path={path} />

        {/* Main Heading */}
        <h1 className="my-4 text-center">Welcome to Pulse Scientific</h1>

        {/* CardList component */}
        <CardList />
      </main>
    </div>
  );
}

export default App;

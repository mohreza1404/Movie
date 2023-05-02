import React from 'react';
import Footers from './Components/Footer/Footer';
import Movie from './Components/Movie/Movie';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Movie />
      <Footers />
    </React.Fragment>
  );
}

export default App;

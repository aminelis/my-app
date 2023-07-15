import './App.css';
import React, { useState } from 'react';
import MovieList from './component/MovieList';
import AddMovie from './component/addMovie';

function App() {
  const [objs, setobjs] = useState([
    {
      id: 1,
      title : 'COWBOYS',
      description: "",
      posterURL: 'https://www.cpasmieux.buzz/8792290-cowboys.html',
      rating: '60%',
    },
    {
      id: 2,
      title : 'ZOMBIES',
      description: "",
      posterURL: 'https://www.imdb.com/title/tt6878820/',
      rating: '40%',
    }
  ]);


  const addMovie = (obj) => {
    setobjs([ ...objs, obj ]);
  };

  return (
    <div className="App">
      
        <h1>This is the list of what you should do</h1>
        
      
  
      <AddMovie handleAdd={addMovie} />
      <MovieList MovieCards={objs} />
    </div>
  );
}

export default App;
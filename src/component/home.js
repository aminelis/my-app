import '/home/amine/my-app/src/App.css';
import MovieList from '/home/amine/my-app/src/component/MovieList';
import AddMovie from '/home/amine/my-app/src/component/addMovie';


const Home = ({ objs, setobjs }) => {
    const addMovie = (obj) => {
      setobjs([...objs, obj]);
    };
  
    return (
      <>
        <h1>This is the list of what you should do</h1>
        <AddMovie handleAdd={addMovie} />
        <MovieList MovieCards={objs} />
      </>
    );
  };
  
  export default Home;
  
import logo from './logo.svg';
import './App.css';
import poster from './components/poster.jpg';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  const arr = [
    {
      name: "Bhoot Police",
      image: "https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg",
      id: 1
    },
    {
      name: "Bol Bachchan",
      image: "https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg",
      id: 2
    },
    {
      name: "Bell Bottom",
      image: "https://1.bp.blogspot.com/-tdSc2ziLV0A/XjAXTV87hII/AAAAAAAAQI8/Vgv_3Rlyi5U4rxDHTQkTQjC62Wqhlz55gCLcBGAsYHQ/s1600/Bell-Bottom-movie-release-date-star-cast-poster.jpg",
      id: 3
    },
    {
      name: "Ram Leela",
      image: "https://e1.pxfuel.com/desktop-wallpaper/851/951/desktop-wallpaper-ram-leela-official-poster-bollywood-movie-poster-thumbnail.jpg",
      id: 4
    },
    {
      name: "Uri",
      image: "https://cdn.shopify.com/s/files/1/0969/9128/products/Uri_-_Hows_The_Josh_-_Bollywood_Patriotic_Hindi_Movie_Poster_239014db-a8d6-40bd-8d98-5093dc439a2c.jpg?v=1570245960",
      id: 5 
    },
    {
      name: "Bhaag Milkha Bhaag",
      image: "https://latestbollywoodcelebrityphotos.files.wordpress.com/2013/07/189843_437393269660184_696001941_n.jpg",
      id: 6 
    }

  ]
  return (
    <div className="App">
      <Navbar />
      <img src={poster} style={{width:"100%", height:"70vh"}}/>
      <div className="food">
        {
          arr.map((ele)=>{
            return <Card name={ele.name} image={ele.image} key={ele.id} />
          })
        }
      </div>
    </div>
  );
}

export default App;

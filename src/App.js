import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter, { Search } from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "The Dark Knight",
      Rating: 9,
      PosterURL:
        "https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
      Description: " Action / Adventure",
    },
    {
      Title: "Fast and Furious 7",
      Rating: 7,
      PosterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdXRuXyrtZx3WA-h3rYzZoK6zldEybNqks8oHS_Iy8-_MHCjON",
      Description: "Action / Adventure",
    },
    {
      Title: "Ice Age",
      Rating: 7,
      PosterURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxVyagwfFHe3FrWofpHfuP0-gK8QIOqYs3V6jOR_phNprVoeZb",
      Description: " Family / Adventure",
    },
    {
      Title: "Kung Fu Panda",
      Rating: 8,
      PosterURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqgWkU4lJ49fP-biZlp_kNAWbfINefWmuBHNrMpTP_KCBMqvyw",
      Description: "Family / Comedy",
    },
    {
      Title: "Transformers",
      Rating: 6,
      PosterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5ydza4Rar3DEOsd0Wc6wL-6gpIzwjPZzfpb2vLNYxFRgm3RB",
      Description: "Sci-fi / Action",
    },
    {
      Title: "I Am Legend",
      Rating: 7,
      PosterURL:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHox76WNKeFcPGLKO6189r3pgqYCl8diSVwcUZgGXdYmaU9oCU",
      Description: "Sci-fi / Horror",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [add, setAdd] = useState("Add new Movie");
  const [query, setQuery] = useState("");

  const receivedQuery = (txt) => {
    setQuery(txt);
  };
  const receivedMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const toggle = () => {
    setVisible(!visible);
    if (visible === true) {
      setAdd("Add new Movie");
    } else {
      setAdd("Close");
    }
  };

  return (
    <div className="App">
      <div className="header">
        <Filter setQuery={receivedQuery} />
        <hr />
        <button type="submit" onClick={() => toggle()}>
          {add}
        </button>
        <hr />
        {visible ? (
          <>
            <AddMovie SubmittedMovie={receivedMovie} />
          </>
        ) : null}
      </div>

      <div className="body">
        <MovieList movies={Search(movies, query)} />
      </div>
    </div>
  );
}

export default App;

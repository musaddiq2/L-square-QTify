import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbars.js";
import { fetchTopAlbums, fetchNewAlbums, fetchTopSongs } from "./api/api.js";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source()
      .then((data) => {
        setData((prevState) => {
          return { ...prevState, [key]: data };
        });
      })
      .catch((error) => {
        console.error(`Error fetching ${key}:`, error);
      });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchTopSongs);
  }, []);
  const { topAlbums = [], newAlbums = [] ,songs=[]} = data;

  return (
    <StyledEngineProvider>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </StyledEngineProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./components/Menu"
import {PERSON_PER_PAGE } from './utils/constants'
import Personagens from './components/Personagens'
import Pagination from "./components/Pagination";
import Filtro from "./components/Filtro";


function App() {
  const [personagens, setPersonagens] = useState([]);
  const [loading,setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [house, setHouse] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      const result = await axios.get('https://hp-api.onrender.com/api/characters');
      setloading(false)
      setPersonagens(result.data)
      setTotalPages(Math.ceil(result.data.length / PERSON_PER_PAGE));
    }
    fetchData();
  }, []);

  const handleClick = num => {
    setPage(num)
  }

  const handleClickHouse = selectdHouse => {
    console.log("clique")
    console.log(selectdHouse)
    setHouse(selectdHouse)
  }

  return (
    <div id="app">
      <Menu />
      <div className="container">
        {loading ? <div className="loading"><h2>Loading ...</h2></div> : <>
          <Filtro  handleClickHouse={handleClickHouse} house={house}/>
          <Pagination totalPages={totalPages} handleClick={handleClick} page={page}/>
          <Personagens personagens={personagens} page={page} house={house}/>
          <Pagination totalPages={totalPages} handleClick={handleClick} page={page}/>
        </>}
      </div>
    </div>
  );


}

export default App;

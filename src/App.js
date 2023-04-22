import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card"
import Menu from "./components/Menu"


function App() {
  const [personagens, setPersonagens] = useState();

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios.get('https://hp-api.onrender.com/api/characters');
    setPersonagens(result.data)
  }
  fetchData();
  }, []);

  

  return (
    <div className="app">
      <Menu />
      <div className="container">
        {personagens && (
          <div className="cards">
            {personagens.map((personagem) => (
            <Card key={personagem.id} personagem={personagem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );


}

export default App;

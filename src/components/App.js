
import '../styles/App.scss';
import quotes from '../services/quotes.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(quotes);
  const [newData, setNewData] = useState({
    quote: "",
    character:"",
  })
  const[search, setSearch] = useState("");
  const [searchChar, setSearchChar] = useState("");

  //pintar
  const htmlData = data
  .filter((eachQuote)=>{
    return eachQuote.quote.toLowerCase().includes(search.toLowerCase());
  })
  .filter ((eachQuote)=>{
    return eachQuote.character.toLowerCase().includes(searchChar.toLowerCase())
  })
 
  .map((eachQuote, index)=>{
    return(
      <li key={index}>{eachQuote.quote} -{eachQuote.character}</li>
    )
  });

  //funciones de eventos

  const handleChange = (ev) =>{
    setNewData({
      ...newData,
       [ev.target.id]: ev.target.value
    })
  };

  const handleClick = (ev) =>{
    ev.preventDefault();
    setData([...data, newData]);
    setNewData({
      quote:"",
      character:"",
    })

  };

  const handleSearch = (ev) =>{
    setSearch(ev.target.value);
  }

  const handleCharSearch =(ev) =>{
    setSearchChar(ev.target.value);
  }
 

  return (
   <div>
     
     <h1>Frases de friends</h1>
     <label>Filtra por frase:</label>
     <input type="text" placeholder="Escribe la frase" name="search" value={search} onChange={handleSearch}/>
     <label>Filtra por personaje:</label>
     <select onChange={handleCharSearch} value={searchChar}>
      <option>Todos</option>
      <option>Ross</option>
      <option>Mónica</option>
      <option>Joey</option>
      <option>Phoebe</option>
      <option>Chandler</option>
      <option>Rachel</option>
     </select>
     {htmlData};
     <h2>Añadir uan nueva frase:</h2>
     <form>
      <label>Frase</label>
      <input type="text" placeholder="Añade frase" id="quote" name="quote" value={newData.quote} onChange={handleChange}/>
      <label>Personaje</label>
      <input type="text" placeholder="Añade personaje" id="character" name="character" value={newData.character} onChange={handleChange}/>
      <input type="submit" onClick={handleClick}/>
     </form>
     
   </div>
   );
}

export default App;
